---
title: "Setting up a merge tool"
date: 2023-03-15T17:09:58+05:30
weight: 3
---

You can set up P4Merge as an external merge tool. Download and install it from the Perforce site. Then, edit the global configuration using **git config --global --edit** and add these lines (substitute your own path to the P4Merge application instead of the placeholder below):
```
[merge]
    tool = P4Merge
    conflictstyle = diff3
[mergetool]
    prompt = false
[mergetool "P4Merge"]
    path = C:\\Apps\\P4Merge\\P4Merge.exe
    keepBackup = false
```
Note the **conflictstyle = diff3** entry in the [merge] section. You’ll see how this helps in the section on handling merge conflicts.