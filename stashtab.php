<?php
header("X-XSS-Protection: 1; mode=block");

function sum($array, $column) 
{
    $sum = array_count_values(
        array_column($array, $column)
    );

    arsort($sum);

    $duplicates = array_filter(
        $sum,
        function ($amount) {
            return $amount > 1;
        }
    );

    return $duplicates;
}

function duplicates($stashtab)
{
    $is_duplicate = sum($stashtab, 'name');

    if ($is_duplicate) {
        $items = array();
        
        foreach ($stashtab as $array => $key) {
            if (array_key_exists($key['name'], $is_duplicate)) {
                $items[$key['name']] = $key['artwork'];
            }
        }

        $duplicates[] = array_merge_recursive($is_duplicate, $items);

        echo json_encode(
            [
                'success' => $duplicates
            ]
        );
    } else {
        echo json_encode(
            [
                'none' => 'There are no duplicates in this Stashtab.'
            ]
        );
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $request = trim(file_get_contents('php://input'));
    $request = filter_var(
        $request,
        FILTER_SANITIZE_STRING,
        FILTER_FLAG_NO_ENCODE_QUOTES
    );
    $request = json_decode($request, true) ?? '';

    if (is_array($request)) {
        if ($request['items']) {
            $stashtab = array();

            foreach ($request['items'] as $items => $item) {
                $name = $item['name'] ?? '';
                $type = $item['typeLine'] ?? '';
                $icon = $item['icon'] ?? '';

                if ($type && $icon) {  
                    $type = filter_var(
                        $type,
                        FILTER_SANITIZE_STRING,
                        FILTER_FLAG_NO_ENCODE_QUOTES
                    );

                    $icon = filter_var(
                        $icon,
                        FILTER_SANITIZE_URL
                    );

                    if ($name) {
                        $name = filter_var(
                            $name,
                            FILTER_SANITIZE_STRING,
                            FILTER_FLAG_NO_ENCODE_QUOTES
                        );

                        $stashtab[] = array(
                            'name' => "{$name} {$type}",
                            'artwork' => strtok($icon, '?')
                        );
                    } else {
                        $stashtab[] = array(
                            'name' => $type,
                            'artwork' => strtok($icon, '?')
                        );
                    }
                } else {
                    echo json_encode(
                        [
                            'error' => 'Please ensure you have copied and pasted everything correctly.'
                        ]
                    );
                }
            }

            if ($stashtab) {
                duplicates($stashtab);
            }

        } else {
            echo json_encode(
                [
                    'error' => 'There are no items in this Stashtab.'
                ]
            );
        }
    } else {
        echo json_encode(
            [
                'error' => 'Please ensure you have copied and pasted everything correctly.'
            ]
        );
    }
}
