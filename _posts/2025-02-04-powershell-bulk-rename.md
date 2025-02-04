---
layout: post
title: Powershell - Bulk rename file extension
date: 2025-02-04T11:45:03+0000 GMT
description: Powershell command for bulk changing file extensions.
tags: powershell windows
categories: snippets blog
featured: true
---
Powershell command for bulk changing file extensions.
```powershell
Get-ChildItem *.md | Rename-Item -NewName { $_.Name -replace '\.md','.old' }
```  
  

Via: [Stackoverflow - How can I bulk rename files in PowerShell?](https://stackoverflow.com/questions/13382638/how-can-i-bulk-rename-files-in-powershell)