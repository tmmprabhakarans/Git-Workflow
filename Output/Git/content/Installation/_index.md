+++
archetype = "chapter"
title = "Installation"
weight = 1
+++

Download and install git from git-scm.com/download/win.

Overrides from the default installation process are listed below (the headings in bold are the Git Setup dialog pages, and the notes below each are the recommendations for that page). For any page not listed below, just go with the default installation setting. Items in yellow are critical – working with Flux depends on these being set correctly.

## Select Components

![Select compenent](/images/Select_component.png)

Make sure you leave the check-box selected to install Git LFS (Large File Support).

## Choosing the default editor used by Git

![Choosing default editor](/images/Defaulteditor.png)

We recommend that you install Notepad++ first, and during the initial installation of Git, select that as the default editor.

## Adjusting the name of the initial branch in new repositories

![Adjusting branch name](/images/Adjusting_branch_name.png)

Override the default branch name for new repositories, and set that to main (this is what we are using for the Flux repositories).

## Configuring the line ending conversions

![Configuring the line ending conversions](/images/Configuring_line_ending.png)

Make sure to select Checkout as-is, commit as-is. In short, we don’t want any LF to CRLF conversions or vice versa. We have a lot of text and HTML files in our test-data set that use Unix style endings and this conversion will cause tests to fail.

## Configuring the terminal emulator to use with Git Bash

![Configuring terminal](/images/Configuringterminal.png)

I found it simpler to use Windows’ default console window than to use MinTTY.

## Choose the default behavior of "git pull"

![Choose the default behaviour](/images/Choose_the_default_behaviour.png)

Make sure to select Only ever fast-forward. This is especially important for folks like us who are coming over from Mercurial. By default a git pull will do a merge of the incoming commit, and that is usually not what you want unless we can do a fast-forward merge. The equivalent to a hg pull is really a git fetch and then one can do a git merge appropriately. I think this is definitely better than doing silent merges of the non-fast-forward variety.

## Choose a credential helper

![Choose a credential helper](/images/Choose_a_credential_helper.png)

Pick the Git Credential Manager Core – this will make it easy to log in just once to Github and you will not keep seeing name and password prompts each time.

{{% notice style="note" %}}
If you have already installed Git earlier, make sure that the settings above are in place. You can check by running git checkout --list and making sure that the following critical settings are are present. If not, set them up as global or system level settings.
{{% /notice %}}

```
filter.lfs.required=true
core.autocrlf=false
pull.ff=only
init.defaultbranch=main
```