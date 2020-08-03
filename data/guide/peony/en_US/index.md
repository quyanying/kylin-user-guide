# Peony
## Overview
Peony(files browser) can view files and folders on the system by category, and supports the general opearations for files and folders. The main interface as shown in Fig 1.

![Fig 1 Peony-big](image/1.png)

## Basic Points
### File Name
- The maximum length of filename is 255 characters, usually composed by letters, numbers, ".(dot)", "\_(underline)", "-".

- Filename can't include "/"; Because "/" means root directory or the separator in a path.

### Path
- Quote filename directly when the file is in current directory; And use file in other directory by specifying its directory.

- Absolute path is certain while relative path depends on working directory.

- Each directory has file "." means current location and file ".." means previous location.

Absolute path -- Start from root directory, for example: "/home/kylin/test"

Relative path -- Start from current directory, for example: (locate at /home) "kylin/test"

When locate at /etc, it can be expressed as "../home/kylin/test"

### File Type
Supported types as shown below:

| Type | Description |
| :------------ | :------------ |
| Normal file | Including text files, data files, executable binary program, etc. |
| Directory file | Regarded as special files, and consist hierarchical tree structure of the system |
| Device file | Recognize devices and drivers, and enable the kernel to communicate with hardware devices |
| Symbolic link | Store the path to a system file; When call the symbolic link, the system will access the path saved in it automatically |

<br>

## Window Composition
It can be divided into five parts: toolbar and address bar, folders lable preview area, sidebar, window area and status bar.

![Fig 2 Window areas-big](image/2.png)

<br>

### Toolbar and Address Bar
Icon and Function:

| Icon | Function | Icon | Function |
| :------------ | :------------ | :------------ | :------------ |
| ![](image/icon1.png) | Create a new folder | ![](image/icon2.png)| Open the terminal |
| ![](image/icon3.png) | Back to the previous directory | ![](image/icon4.png) | Forward to the next directory |
| ![](image/icon5.png)  | Search box | ![](image/icon6.png) | Set view method |
| ![](image/icon7.png) | Set sort method | ![](image/icon8.png) | Advanced settings |

<br>

### Folders Lable Preview Area
Users can view the opened folders in the current window, and click "+" to create a page same as the current opened page, as shown in Fig 3.

![Fig 3 Folders lable preview area](image/3.png)

### Sidebar
Sidebar lists the directories by the form of tree's hierarchy. External mobile devices and remote shared devices are also shown here.

### Window Area
It lists the sub directories and files of the current directory. Clicking one directory in the sidebar, the contents of it will be shown here.

### Status Bar
1) When enter one directory, it shows the current path.

2) When select one folder, it shows the folder's name.

3) When select one file, it shows the name and size of this file.

### Detail
Select one file, and click "![](image/icon9.png)" can see the detail informations about this file, as shown in Fig 4.

![Fig 4 Detail](image/4.png)
<br>

## Basic Function
### View Files and Folders
View and manage local files, local storage devices (such as external hard disk), file server, and files in network sharing. 

View any file's contents by double clicking (or open it by the default application). Right clicking can choose to open it in a new tab / new window.

#### View Mode
The system shows all files and directories through "Icons" mode by default.

- Icons: The form is "Big icon + File name".

- List: The form is "Small icon + File name + File informations"

![Fig 5 Show in "List"-big](image/5.png)

#### Sort Mode
Users can change it by "![](image/icon7.png)" button on the toolbar.

![Fig 6 Sort ways](image/6.png)

Sort ways introduction:

1) By Name: Alphabetical file name.

2) By Size: Sort by the amount of disk space occupied by the file; From minimum to maximum by default.

3) By Type: Merge similar files together and sort by name.

4) By Date Modified: Sort by the last time to modify files; From the oldest to newest by default.

### Search Files
- Basic search:

Click "![](image/icon5.png)", and input the key words in the box. Press "Enter" to search in the current path.

![Fig 7 Search file-big](image/7.png)

- Advanced search:

Click "more options" to add more rules, as shown in Fig 8.

![Fig 8 More options](image/8.png)

### Files and Folders General Operations
1) Copy

* Way 1：Select file and right click > "Copy" > right click at destination > "Paste"

* Way 2: Select file, Ctrl+C > Destination, Ctrl+V

* Way 3: Drag file from original location to the destination.

In way 3, if the two locations are both on a same hard disk, the file will be moved (press Ctrl to copy); If drag from U disk to the system, the file will be copied (because they are two different devices).

2) Move

* Way 1: Select file and right click > "Cut" > right click at destination > "Paste"

* Way 2: Select file, Ctrl+X > Destination, Ctrl+V

3) Delete

Move to trash:

* Way 1: Select file and right click > "Delete to Trash"

* Way 2: Select file, Delete

* Way 3: Drage to Trash on the desktop

If the deleted files are on a removable device, and eject this device without emptying trash, those files will be seen in the trash when re-insert the device to the current system.

Permanently delete:

* Way 1: Delete in trash

* Way 2: Select file, Shift + Delete

4) Rename

* Way 1: Select file and right click > "Rename"

* Way 2: Select file, F2

Press Ctrl + Z to revoke rename.

## Advanced Function
Click "![](image/icon8.png)" to enter the setting interface.
 
![Fig 9 Preferences](image/9.png)

<br>

## Appdenix
### Shortcut Key

| Shortcut | Function |
| :------------ | :------------ |
| Ctrl + C  | Copy |
| Ctrl + X  | Cut |
| Ctrl + V  | Paste |
| Delete  | Delete |
| Shift + Delete  | Permanently Delete |
| Ctrl + Z  | Revoke |
| Ctrl + A  | Select All |
| F2  | Rename |

### Wildcard Description

| Wildcard | Description |
| :------------ | :------------ |
| * | Match 0 or multiple charaters |
| ? | Match any charater |
| [abl A-F] | Match any charater listed in the square brackets. This example represents any charater in a, b, l and captial letter from A to F |

