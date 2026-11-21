$ErrorActionPreference='Stop'
$moves=@(
 @{Source='C:\code\zac\zak\converted\poc';Target='D:\zac-asset-storage\poc'},
 @{Source='C:\Users\zakri\.codex\generated_images\01a1fe41-6dc7-7ed0-8069-7cb1f6e9109b';Target='D:\zac-asset-storage\generated-01a1fe41-6dc7-7ed0-8069-7cb1f6e9109b'}
)
foreach($move in $moves){
 $source=[IO.Path]::GetFullPath($move.Source);$target=[IO.Path]::GetFullPath($move.Target)
 if($source -ne $move.Source -or -not $target.StartsWith('D:\zac-asset-storage\')){throw 'Path validation failed'}
 $item=Get-Item -LiteralPath $source -Force
 if($item.LinkType -ne 'Junction'){Write-Output ('Already local: '+$source);continue}
 if([IO.Path]::GetFullPath($item.Target) -ne $target){throw 'Unexpected junction target'}
 $linkBackup=$source+'_external_link'
 if(Test-Path -LiteralPath $linkBackup){throw 'Backup path already exists'}
 $files=Get-ChildItem -LiteralPath $target -Recurse -File | ForEach-Object {@{Relative=$_.FullName.Substring($target.Length);Hash=(Get-FileHash -LiteralPath $_.FullName -Algorithm SHA256).Hash}}
 Rename-Item -LiteralPath $source -NewName ([IO.Path]::GetFileName($linkBackup))
 Move-Item -LiteralPath $target -Destination $source
 foreach($entry in $files){if((Get-FileHash -LiteralPath ($source+$entry.Relative) -Algorithm SHA256).Hash -ne $entry.Hash){throw 'Restoration hash mismatch'}}
 $link=Get-Item -LiteralPath $linkBackup -Force
 if($link.LinkType -ne 'Junction' -or [IO.Path]::GetFullPath($link.Target) -ne $target){throw 'Refusing to remove unexpected path'}
 Remove-Item -LiteralPath $linkBackup -Force
 Write-Output ('Restored and SHA256 verified '+$files.Count+' files: '+$source)
}
