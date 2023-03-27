---
title: "Setting up a diff tool"
date: 2023-03-15T17:02:31+05:30
weight: 2
---

Here’s how to set up WinMerge as the diff tool for Git. Use git config --global --edit to edit the global Git config file in your text editor. Then, add (or modify) the following sections (the cmd= lines are too long and are wrapping around in the text below, take care when you are adding them, and take care of escaping the quotes and the slashes).

```
[diff] 
    tool = winmerge
[difftool]
    prompt = false 
[difftool "winmerge"] 
    cmd = \"C:\\Apps\\WinMerge\\WinMergeU.exe\" -e -r -u -dl \"Old $BASE\" -dr \"New $BASE\" \"$LOCAL\" \"$REMOTE\"
    trustExitCode = true
```

Now we have set up an external diff tool for Git to use. However, you wil note that git diff will still use the built-in diff that just dumps on the console. To invoke the external diff tool, we need to use **git difftool -d** or **git difftool --dir-diff**. That will invoke the external tool you have set up. The **--dir-diff** switch is important. Otherwise it will invoke WinMerge once for each file instead of showing a unified interface with all the changed files.

It’s painful to keep typing in this each time, so one can set up an alias. Again edit the global config file using git config --global --edit and add the alias git di to invoke the diff-tool (I also added a few more aliases here that I use):
```
[alias]
    st = status
    sw = switch
    di = difftool --dir-diff
    tip = log -1 head
    lg = log --graph --format==\"%h %C(yellow)%an%Creset %C(green)%as%Creset %s %C(brightblue)%d%Creset\" 
```
Now, you can just type in **git di** to run a diff using WinMerge.