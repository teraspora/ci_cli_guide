# Guide to the Bash CLI (Command-Line Interface) for student software developers

## Introduction

Throughout your journey as a software developer, you will have to use the command line.   Sure, these days many code editors, cloud-based or not, have buttons you can click and icons you can drag to do many of the things that you'll need to do to create a simple web application and deploy it.   But once things start getting a little more complex, it becomes essential to be comfortable using the command line.

So exactly what are the command line, the CLI, Bash, the Terminal, the Linux shell?

Simply put, it's a way of telling the computer what to do by typing textual commands.   It's an application that runs on your computer, or in the cloud on a server, and gives you a window in which there's a prompt, for instance a `$` sign.   You type commands after the prompt, press `Enter` and the computer then runs the command and prints any output there may be.   A command you issue may for instance be an instruction to move or copy files, to create a directory (folder), to run a program, to edit a file, to change or query operating system information, to install applications or libraries, to check network status, to ask the time...

Commands begin with a keyword, and then a space.   Then you type any options and/or flags, separated by spaces.   Options are ususally just words or hyphenated words (like `install` or `full-upgrade`).   Flags can be single letters preceded by a dash/minus sign (like `-h`, or word-strings preceded by a double dash, (like `--almost-all`).

There's a handful of commands it pays to get familiar with.   And most commands accept a `-h` or `--help` flag which will print basic information about itself.   Sometimes it's not very helpful, though, and you'll want to use the `info` command or the `man` command (it stands for "manual") to get more detailed information.   There are also many forums and other websites with tutorials, examples, testbeds, video lessons.   So if you want to find out about the `find` command, for example, you could type `info find` (press space to page down, `q` to quit displaying the man page).   And/or search the web for "bash find" and explore the results.

And there's a handful of very useful keyboard shortcuts it's worth getting to know.   We'll introduce these one by one as we go.

I assume you have a shell to play in, be it on your computer or in the cloud via a web interface.   Do type the commands as we go, don't copy and paste them.   Your fingers need to remember them!   So let's get going!

## Moving around your file system

Your files are stored in a hierarchical structure.   The file system has a `root` directory, denoted by a slash `/`, and within this, you as a user have a "Home" directory, so if your username is "kermit", your "Home" directory will be `/home/kermit/`, and within this you'll create new folders for different projects, and folders within these - subdirectories - for different kinds of files or different sections of your projects.   The home directory is usually denoted by `~` for short.

We'll use the terms "folder" and "directory" interchangeably.   The `path` of a file or directory is the string of directories you need to traverse from the root to get to where that file or directory is. 

Let's find out where we are!

```
$ pwd
/home/john
$ 
```
`pwd` stands for "Print working directory".   Whenever you're in the shell, you're someplace in the file system.   You can use `pwd` to find out where.   OK, let's create a folder for our project:

```bash
$ pwd
/home/john
$ mkdir project_1
$ cd project_1/
$ pwd
/home/john/project_1
$ 
```
OK, that's two new commands!

`mkdir project_1` means "Make a directory called `project_1` here in the current directory."  It will only print something is there's an error; if successful, it's silent.

`cd project_1` means "Change the current directory to `project_1`".

When you type `pwd` again, notice that the working, or current, directory has changed.

`project_1` is a "child" directory of `~`.   `~` is the "parent" of `project_1`.

Let's go back up to the parent:

```
$ cd ..
$ pwd
/home/john
$ 
```
`..` always denotes the parent of the current directory.   `.` denotes the current directory.

Now create another folder, a "sibling" of `project_1`, change to it, and create a file within it:

```
$ mkdir project_2
$ cd project_2/
$ >fred.txt
```

Typing `>` and then a file name will create an empty file with that name.   Beware, though:  if a file exists with that name it's content will be destroyed!

Let's check it got created:

```
$ ls
fred.txt
$ 
```

We use `ls` to list directory contents.   But how can we list the contents of `project_1`, if we're in `project_2`?   Simple:  go to the parent first, then down into `project_1`:

```
$ pwd
/home/john/project_2
$ ls ../project_1/
$ 
```
No output means there are no files or folders within `project_1`.

OK, at this stage we don't really need two project directories, so let's remove `project_2`.   We'll need to go up out of it, back to the parent, first:

```
$ cd ..
$ pwd
/home/john
$ rmdir project_2/
rmdir: failed to remove 'project_2/': Directory not empty
$ 
```

`rmdir` means "Remove directory".   But it didn't work.   If you type `man rmdir`, you'll see why right at the top:

```
RMDIR(1)                                           User Commands                                           RMDIR(1)

NAME
       rmdir - remove empty directories

SYNOPSIS
       rmdir [OPTION]... DIRECTORY...

DESCRIPTION
       Remove the DIRECTORY(ies), if they are empty.
```

Ok, so we need to remove `fred.txt` first.   But it's a file, not a folder, so we can't use `rmdir`.

```
$ ls
fred.txt
$ $ rm project_2/fred.txt 
$ ls project_2/
$ rmdir project_2/
$ 
```
Unsurprisingly, `rm` is used for removing files.   They don't have to be empty so take care what you remove!   

>Notice in the above example we used the same last option, the directory name `project_2/` in two consecutive commands.
>There's a couple of shortcuts to save typing it twice (but they may not both work in all shall apps).
>One is to press `Escape` and then `.`, and the other is to type `!$`.   Try them out!


Instead you might want to move a file somewhere else.   Let's create a few files and folders inside `project_1`:

```
$ pwd
/home/john/project_1
$ mkdir foo
$ mkdir bar
$ mkdir foo/cats
$ mkdir foo/dogs
$ >foo/cats/lion.txt
$ >foo/cats/tiger.txt
$ ls
bar  foo
$ ls foo
cats  dogs
$ ls foo/cats/
lion.txt  tiger.txt
$ 
```

Let's write some text to `tiger.txt`.   First, we'll move into `foo/cats` so we don't have to use long paths:

```
$ cd foo/cats
$ echo "Tiger, tiger burning bright" > tiger.txt 
$ cat tiger.txt
Tiger, tiger burning bright
$ 

Two new commands:
`cat` outputs the contents of a text file to the terminal.
`echo` copies the quoted text on the left of the `>` to the file on the right.   If the file doesn't exist, it'll be created.   If it does exist, it'll be overwritten.   To append text at the end of the file, after the existing content, use `>>` instead of `>`:

```
$ echo "Some text" > tiger.txt 
$ cat tiger.txt
Some text
$ echo "Another line of text" >> tiger.txt 
$ cat tiger.txt
Some text
Another line of text
$ 
```


