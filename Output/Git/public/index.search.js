var relearn_search_index = [
  {
    "content": "Download and install git from git-scm.com/download/win.\nOverrides from the default installation process are listed below (the headings in bold are the Git Setup dialog pages, and the notes below each are the recommendations for that page). For any page not listed below, just go with the default installation setting. Items in yellow are critical – working with Flux depends on these being set correctly.\nSelect Components Make sure you leave the check-box selected to install Git LFS (Large File Support).\nChoosing the default editor used by Git We recommend that you install Notepad++ first, and during the initial installation of Git, select that as the default editor.\nAdjusting the name of the initial branch in new repositories Override the default branch name for new repositories, and set that to main (this is what we are using for the Flux repositories).\nConfiguring the line ending conversions Make sure to select Checkout as-is, commit as-is. In short, we don’t want any LF to CRLF conversions or vice versa. We have a lot of text and HTML files in our test-data set that use Unix style endings and this conversion will cause tests to fail.\nConfiguring the terminal emulator to use with Git Bash I found it simpler to use Windows’ default console window than to use MinTTY.\nChoose the default behavior of “git pull” Make sure to select Only ever fast-forward. This is especially important for folks like us who are coming over from Mercurial. By default a git pull will do a merge of the incoming commit, and that is usually not what you want unless we can do a fast-forward merge. The equivalent to a hg pull is really a git fetch and then one can do a git merge appropriately. I think this is definitely better than doing silent merges of the non-fast-forward variety.\nChoose a credential helper Pick the Git Credential Manager Core – this will make it easy to log in just once to Github and you will not keep seeing name and password prompts each time.\nNote If you have already installed Git earlier, make sure that the settings above are in place. You can check by running git checkout –list and making sure that the following critical settings are are present. If not, set them up as global or system level settings.\nfilter.lfs.required=true core.autocrlf=false pull.ff=only init.defaultbranch=main ",
    "description": "",
    "tags": null,
    "title": "Installation",
    "uri": "/installation/index.html"
  },
  {
    "content": "Set up name and e-mail Set up your e-mail address (use all lowercase), and name (also with all lower-case and with no space), like gandalf or boromir or tombombadil. If your first name is unambiguous enough (in other words, you are an old-timer) use just that. Otherwise use both first and last names. Do not use an initial.\ngit config --global user.name boromir git config --global user.email boromir@gondor.org ",
    "description": "",
    "tags": null,
    "title": "One-time Git setup",
    "uri": "/installation/one-time-git-setup/index.html"
  },
  {
    "content": "Here’s how to set up WinMerge as the diff tool for Git. Use git config –global –edit to edit the global Git config file in your text editor. Then, add (or modify) the following sections (the cmd= lines are too long and are wrapping around in the text below, take care when you are adding them, and take care of escaping the quotes and the slashes).\n[diff] tool = winmerge [difftool] prompt = false [difftool \"winmerge\"] cmd = \\\"C:\\\\Apps\\\\WinMerge\\\\WinMergeU.exe\\\" -e -r -u -dl \\\"Old $BASE\\\" -dr \\\"New $BASE\\\" \\\"$LOCAL\\\" \\\"$REMOTE\\\" trustExitCode = true Now we have set up an external diff tool for Git to use. However, you wil note that git diff will still use the built-in diff that just dumps on the console. To invoke the external diff tool, we need to use git difftool -d or git difftool –dir-diff. That will invoke the external tool you have set up. The –dir-diff switch is important. Otherwise it will invoke WinMerge once for each file instead of showing a unified interface with all the changed files.\nIt’s painful to keep typing in this each time, so one can set up an alias. Again edit the global config file using git config –global –edit and add the alias git di to invoke the diff-tool (I also added a few more aliases here that I use):\n[alias] st = status sw = switch di = difftool --dir-diff tip = log -1 head lg = log --graph --format==\\\"%h %C(yellow)%an%Creset %C(green)%as%Creset %s %C(brightblue)%d%Creset\\\" Now, you can just type in git di to run a diff using WinMerge.\n",
    "description": "",
    "tags": null,
    "title": "Setting up a diff tool",
    "uri": "/installation/setting-up-a-diff-tool/index.html"
  },
  {
    "content": "You can set up P4Merge as an external merge tool. Download and install it from the Perforce site. Then, edit the global configuration using git config –global –edit and add these lines (substitute your own path to the P4Merge application instead of the placeholder below):\n[merge] tool = P4Merge conflictstyle = diff3 [mergetool] prompt = false [mergetool \"P4Merge\"] path = C:\\\\Apps\\\\P4Merge\\\\P4Merge.exe keepBackup = false Note the conflictstyle = diff3 entry in the [merge] section. You’ll see how this helps in the section on handling merge conflicts.\n",
    "description": "",
    "tags": null,
    "title": "Setting up a merge tool",
    "uri": "/installation/setting-up-a-merge-tool/index.html"
  },
  {
    "content": "Scope of the document: This document explains how to install Git and additional tools to set up.\nPre-requisites: Download and install Visual Studio 2019 or later. You need to turn on the .Net desktop development workflow (all others are optional).\nDownload and install WinMerge. Make sure that this is in the path (turn on the Add WinMerge folder to your system path) switch when you install this. (The Flux.Test system uses WinMergeU.exe to display differences in text files).\nDownload and install Notepad++. This is not strictly required, but is convenient to use as a message editor from Git. If you skip this, choose Notepad instead of Notepad++ when installing Git.\nDownload and install the ODA File Converter from the OpenDesign alliance. Flux uses this for importing DWG files (by converting them to DXF) and if you do not install this, a few Flux tests related to DWG import will fail.\n",
    "description": "",
    "tags": null,
    "title": "Git Installation Manual",
    "uri": "/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tags",
    "uri": "/tags/index.html"
  }
]
