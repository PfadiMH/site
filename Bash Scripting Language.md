Bash is the default shell on most Linux systems.

A shell is a program that reads commands from the keyboard or from a file and passes them to the operating system to execute.

Bash (Bourne Again Shell) is an extension of `sh` (Bourne Shell) and offers many features that are not available in other shells.

## Commands

| Command | Description                           |                                                        |
| ------- | ------------------------------------- | ------------------------------------------------------ |
| `~`     | Home directory                        |                                                        |
| `.`     | Current directory                     |                                                        |
| `;`     | Command separator                     |                                                        |
| `       | `                                     | Pipe (output of one command becomes input of the next) |
| `#`     | Comment                               |                                                        |
| `\`     | Escape character or line continuation |                                                        |
| `&`     | Background process                    |                                                        |
| chgrp   | Change Group of file                  |                                                        |

## Help

The `man` command can be used to display help pages for Bash commands.

The `which` command shows the path of an executable file.

## System-specific Commands

| Command | Description |
| --- | --- |
| `reboot` (also `shutdown -r` or `init 6`) | System restart |
| `halt` (also `shutdown -h`, `init 0`, or `poweroff`) | System shutdown |

## Files and Directories

### Directory

| Command | Description |
| --- | --- |
| `ls` | Lists files and directories |
| `cd` | Changes the directory |
| `pwd` | Shows the current directory |
| `mkdir` | Creates a directory |
| `rmdir` | Deletes a directory |
| `find` | Searches for files and directories |

### File

| Command | Description |
| --- | --- |
| `cat` | Displays the contents of a file |
| `cp` | Copies a file |
| `mv` | Moves a file |
| `rm` | Deletes a file |
| `touch` | Creates an empty file |
| `wc` | Counts the number of lines, words, and characters in a file |

### Path

There are two types of paths:

- Absolute Path: The path starts with the root directory `/`.
- Relative Path: The path starts from the current directory.

## Wildcard and Brace Expansion

| Command   | Description                                     |
| --------- | ----------------------------------------------- |
| `*`       | Matches zero or more characters                 |
| `?`       | Matches one character                           |
| `{1,2,3}` | Matches any elements in the braces              |
| `{!3}`    | Matches all elements except the negated one (3) |
| {1..3}    | copies line for each 1,2,3                      |

# Shell Programming

## Shebang

The shebang tells the operating system which interpreter to use.

```bash
#!/bin/bash
```

## Execution Rights

For a script to be executable, it must have execution rights.

```bash
chmod +x script.sh
```

## Variables

Variables in Bash are untyped.
They are set with an `=`.
They are accessed with a `$`.

```bash
name="John"
echo $name
```

Using `readonly`, a variable can be defined as constant.

### Predefined Variables

| Variable | Description |
| --- | --- |
| `$LOGNAME` | Username |
| `$0` | Script name |
| `$1`, `$2`, ... | Arguments |
| `$#` | Number of arguments |
| `$$` | Process ID |
| `$?` | Exit status of the last command |
| `$!` | Process ID of the last background process |
| `$PWD` | Current directory |
| `$OLDPWD` | Previous directory |
| `$HOME` | Home directory |
| `$UID` | User ID |
| `$PATH` | Search path for executables |
| `$CDPATH` | Search path for directories |
| `$SHELL` | Shell |
| `$RANDOM` | Random number 0-32767 |
| `$REPLY` | Response to `read` command |
| `$SECONDS` | Seconds since the start of the script |
| `$PROMPT_COMMAND` | Command executed before the prompt is displayed |
| `$PS1` | User prompt |
| `$TZ` | Time zone |

## Operators

Arithmetic operators can only process integers.
For floating-point numbers, `bc` must be used.

There are two variants to perform arithmetic operations:

```bash
a=$(( 5 + 5 ))
b=$[ 5 + 5 ]
```

## Strings

Processing of strings in Bash.

| Command | Description |
| ---- | ---- |
| `${#string}` | Length of the string |
| `${string:position:length}` | Substring |
| `${string#substring}` | Removes shortest match from the left |
| `${string##substring}` | Removes longest match from the left |
| `${string%substring}` | Removes shortest match from the right |
| `${string%%substring}` | Removes longest match from the right |
| `${string/substring/replacement}` | Replaces the first occurrence |
| `${string//substring/replacement}` | Replaces all occurrences |
| `string/#substring/replacement}` | Replaces if the string starts with the substring |
| `${string/%substring/replacement}` | Replaces if the string ends with the substring |

## Arrays

```bash
array=(1 2 3 4 5)

# Specific element
echo ${array[0]}

# Length of the array
echo ${#array[@]}

# All elements
echo ${array[@]}
```

## Control Structures
### Comparing Operators

| flag  | defnintion             |
| ----- | ---------------------- |
| `-eq` | Equal                  |
| `-ne` | Not equal              |
| `-gt` | Greater than           |
| `-ge` | Greater than or equal  |
| `-lt` | Less than              |
| `-le` | Less than or equal     |
| `-z`  | Empty string           |
| `-n`  | Not empty string       |
| `-e`  | File exists            |
| `-f`  | File is a regular file |
| `-d`  | File is a directory    |
| `-s`  | File is not empty      |
String Comparison: 
- `=` for equality and `!=` for inequality.

### If

```bash
if [ $1 -gt 100 ]
then
  echo "Number is greater than 100"
elif [ $1 -eq 100 ]
then
  echo "Number is equal to 100"
else
  echo "Number is less than 100"
fi
```

## For Loop

```bash
for i in 1 2 3 4 5
do
  echo $i
done

# Range
for i in {1..5}
do
  echo $i
done

# Files
for file in *; do
  echo $file
done

# Lines
for line in $(cat file.txt); do
  echo $line
done
```

## While Loop

```bash
i=1
while [ $i -le 5 ]
do
  echo $i
  ((i++))
done
```
### Functions
```bash
function_name1() {
echo $1
}

function_name2 543


```

**only first letter:**


```bash
for file in *; do
echo ${file:0:1}
done
```
prints the first character of each filename.

**Only Files:**


```
Dateien 
for file in $(ls -1p | grep -v '/'); do
echo ${file:0:1}
done
```
excludes directories

```bash
awk
ajay manager account 45000
sunil clerk account 25000
awk '{print $3}' employee.txt
awk '/manager/ {print}' employee.txt 
```
- **Purpose:** These lines demonstrate the use of `awk` for text processing.
    - `awk '{print $3}' employee.txt` - Prints the third column (account) from the "employee.txt" file.
    - `awk '/manager/ {print}' employee.txt` - Prints lines containing the word "manager" from the "employee.txt" file
**Examples**
```bash
function is_good {
if [[ $1 == *cat* ]]; then
echo "good"
else
echo "bad"
fi
}
is_good "my cat is good"
is_good "my dog is good" 

```


**Check directory existence**
```bash
if [ -d /etc ]; then echo "Directory exists" fi
```