## ls

| Flag | Bedeutung                 |
| ---- | ------------------------- |
| -a   | **A**ll                   |
| -A   | **A**ll except . and ..   |
| -l   | **L**ong                  |
| -1   | **O**ne per line          |
| -d   | **D**irectory             |
| -p   | **P**ut / after directory |
Only files: `ls -p | grep -v /`
## grep

Used to search for patterns within files.

- `grep pattern file` - Searches for `pattern` within `file`.
- `grep "pattern" file1 file2` - Searches for `pattern` within `file1` and `file2`.

| Flag | Meaning                                      |
| ---- | -------------------------------------------- |
| -i   | Case **I**nsensitive search                  |
| -v   | In**V**ert match (select non-matching lines) |
| -o   | Show only the matching part of the line      |
| -E   | Use **E**xtended regular expressions         |
| -F   | Use **F**ixed strings (exact match)          |
| -c   | Count matches                                |

*Additional:*

- `egrep` is equivalent to `grep -E`.
- `fgrep` is equivalent to `grep -F`.

## cut

Used to remove sections from each line of files.

- `cut -d',' -f1 file` - Cuts the first field from each line in `file` using the comma as a delimiter.
- `cut -d':' -f1,3 file` - Cuts the first and third fields from each line in `file` using the colon as a delimiter.

| Flag | Meaning                               |
| ---- | ------------------------------------- |
| -d   | **D**elimiter used to separate fields |
| -f   | **F**ields to be cut                  |


## awk
awk options 'selection _criteria {action }' input-file > output-file

Flag Bedeutung

-F fs Field separator

awk -F: '{print $1}' /etc/passwd
## crontab

Used to schedule commands to run periodically at fixed times, dates, or intervals.

- `crontab -e` - **E**dit the current user's crontab.
- `crontab -l` - **L**ist the current user's crontab.
- `crontab -r` - **R**emove the current user's crontab.

Crontab format:

```
* * * * * command to execute
┬ ┬ ┬ ┬ ┬
│ │ │ │ │
│ │ │ │ └──── Day of the week (0-7, Sunday can be 0 or 7)
│ │ │ └────── Month (1-12)
│ │ └──────── Day of the month (1-31)
│ └────────── Hour (0-23)
└──────────── Minute (0-59)
```

- `*`: Represents "every" (e.g., `* * * * *` runs the job every minute).
- `,`: Separates multiple values within a field (e.g., `0,15,30` runs the job at minutes 0, 15, and 30).
- `-`: Defines a range of values within a field (e.g., `1-5` runs the job between 1:00 and 5:00).
- `/`: Defines an interval for a field (e.g., `*/5` runs the job every 5 minutes).

## tar

Used to store and extract files from a tape or disk archive.

- `tar cfvz archive.tar.gz content1 content2` - **C**reates a gzipped tar archive named `archive.tar.gz` containing `content1` and `content2`.

| Flag | Meaning                           |
| ---- | --------------------------------- |
| c    | **C**reate archive                |
| x    | E**x**tract files from an archive |
| f    | Use **F**ile as the archive name  |
| v    | **V**erbose output                |
| z    | Use gzip compression (.tar.gz)    |
| j    | Use bzip2 compression (.tar.bz2)  |
| t    | list the contents of the archive  |
Examples:
compress:
```
tar cvzf my_archive.tar.gz file1 file2 directory/
```
extract: 
```
tar xvf my_archive.tar 
```
## zip/unzip

Used to package and compress (archive) files.

- `zip -r archive.zip content1 content2` - Creates a zip file named `archive.zip` including `content1` and `content2` **R**ecursively.
- `unzip archive.zip` - Extracts the contents of `archive.zip`.

| Flag | Meaning |
| --- | --- |
| -r | **R**ecursive |
| -q | **Q**uiet mode (suppress output) |
| -m | **M**ove files into the zip archive |
| -d | **D**elete entries from a zip archive |
| -u | **U**pdate zip file, replacing older files with newer ones |
| -l | **L**ist the contents of a zip file |

## ifconfig

Used to configure, control, and query TCP/IP network interface parameters from a CLI.

- `ifconfig -a` - Displays all interfaces which are currently available, even if down.
- `ifconfig eth0 down` then `ifconfig eth0 up` - Brings the `eth0` interface down, then back up.

## fping

A program like `ping` but with more features, used to send ICMP echo requests to network hosts.

- `fping -a -g 192.168.1.0/24` - Scans the network, showing only **A**live hosts in the given IP range.

| Flag | Meaning                                                                               |
| ---- | ------------------------------------------------------------------------------------- |
| -a   | Show **A**live hosts only                                                             |
| -c   | **C**ount of echo requests to send to each target                                     |
| -g   | **G**enerate a list of targets from a given range (CIDR notation) (all from a subnet) |
| -t   | **T**imeout in milliseconds                                                           |

## find

Used to search for files in a directory hierarchy.

- `find / -name

 "file" -type f -size +1M -user user -exec rm {} \;` - Finds all files named "file" of type `f`ile, larger than 1M, owned by `user`, and executes `rm` on them.

| Flag          | Meaning                                                 |
| ------------- | ------------------------------------------------------- |
| -name, -iname | Filter by file **name** (`-iname` for case-insensitive) |
| -type         | Filter by **type** of file                              |
| -size, -empty | Filter by file **size** or find **empty** files         |
| -user, -group | Filter by file **owner** or **group**                   |
| -exec         | **Execute** a command on each found file                |
### Extra examples:
Modulo:
```bash
a=`expr 12 % 5`
echo $a
output: 2
```