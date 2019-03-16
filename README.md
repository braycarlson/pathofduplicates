## Path of Duplicates

[Path of Duplicates](https://www.braydencarlson.com/pod) is a tool used to check any Stashtab on your account for duplicates items in the Standard, Hardcore, Synthesis or Hardcore Synthesis league in Path of Exile.

## Getting Started

It is recommended you use a modern browser for the best experience.

### Step 1
You **must** sign-in to the [Path of Exile](https://www.pathofexile.com/my-account) website to get access to your Stashtab data *(or view your [Account Name](https://raw.githubusercontent.com/braycarlson/pathofduplicates/master/images/accountname.png) and [League](https://raw.githubusercontent.com/braycarlson/pathofduplicates/master/images/league.png)).*

### Step 2
Go to [Path of Duplicates](https://www.braydencarlson.com/pod) and fill out the `Create A Link` form where you must provide your [Account Name](https://raw.githubusercontent.com/braycarlson/pathofduplicates/master/images/accountname.png), [Tab Index](https://raw.githubusercontent.com/braycarlson/pathofduplicates/master/images/tabindex.png) and [League](https://raw.githubusercontent.com/braycarlson/pathofduplicates/master/images/league.png). Once you have filled out the form, press `Submit`, and a new page will open and take you to your [Stashtab data](https://raw.githubusercontent.com/braycarlson/pathofduplicates/master/images/stashtab.png).

### Step 3
Copy all of the text from the [Stashtab data](https://raw.githubusercontent.com/braycarlson/pathofduplicates/master/images/stashtab.png) page, go to back to [Path of Duplicates](https://www.braydencarlson.com/pod), press the `Stashtab` form, paste the content of your Stashtab data into the form, and then press `Submit` to check for duplicates.

### And that's it.

You have successfully checked a Stashtab for duplicate items. You can repeat this process for every Stashtab you have to ensure you have a clean and organized inventory.

## FAQ

### What is my Account Name?
You can sign-in to the Path of Exile website to check your Account Name *(your character's name is not your Account Name)*. You can check your Account Name in these [four locations](https://raw.githubusercontent.com/braycarlson/pathofduplicates/master/images/accountname.png) on the Path of Exile website, after you have successfully signed in.

### What is a Tab Index?
A tab index is the way each tab in your stash is numbered. The first tab in your stash has an index of zero, the second tab has an index of one, the third tab has an index of two and so forth. If you want to check the sixth tab in your stash, you will enter `5` as your Tab Index. You can launch Path of Exile to check your Tab Index. You can see an example of the Tab Index [here](https://raw.githubusercontent.com/braycarlson/pathofduplicates/master/images/tabindex.png).

### What is my League?
You can sign-in to the Path of Exile website to check your League for the character you currently have selected. You can check your League in these [two locations](https://raw.githubusercontent.com/braycarlson/pathofduplicates/master/images/league.png) on the Path of Exile website, after you have successfully signed in.

### What is Stashtab Data?
You must sign-in to the Path of Exile website to get access to your Stashtab data. You will be brought to this page once you complete the previous form *(where you fill out your Account Name, Tab Index and League)*. You must copy all of the text from this page and paste it into the Stashtab form to check for duplicates. You can see an example of Stashtab data in JSON format [here](https://raw.githubusercontent.com/braycarlson/pathofduplicates/master/images/stashtab.png).

### What does `{"error":{"code":6,"message":"Forbidden"}}` mean?
You will see this error if you try to access your Stashtab while you are not signed-in or if you are trying to look at another account that you do not have authorization for. You may only view data for the account you are currently signed-in as.

## Demo
You can demo [Path of Duplicates](https://www.braydencarlson.com/pod) by opening any .`json` file in the `examples` directory in this project or copying the text from [Zerobin](https://zerobin.net/?ae77ab855a7fd5ee#wIAxkQE3jRqbQzJteNkFshYEBAe3241UtfgZJYsIxCw=), and pasting it into the `Stashtab` form, and it will show all of the duplicate items.

## Notice
Path of Duplicates is not affiliated, associated, endorsed by, or connected to Path of Exile or Grinding Gear Games. All item names, images and artwork are property of their respective owners. All item names, images and artwork used in this website are for identification purposes only.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
