Powershell - Bulk rename file extension

Powershell command for bulk changing file extensions.
```
Get-ChildItem *.md | Rename-Item -NewName { $_.Name -replace '\.md','.old' }
```

Via: [Stackoverflow - How can I bulk rename files in PowerShell?](https://stackoverflow.com/questions/13382638/how-can-i-bulk-rename-files-in-powershell)