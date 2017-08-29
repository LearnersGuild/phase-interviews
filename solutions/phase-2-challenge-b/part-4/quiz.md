## Part 4: Quiz time!

Copy the questions below into a file `part-4/quiz.md`. Then, write your answer to each question directly below it.

The quiz is worth __50 points__ in total.

_Reminder: you can use the internet to help you answer these questions :)_

- When you run a command in the terminal, where does BASH look for that command?
    
    Bash at your aliases, and then at all of the directories specified in your `$PATH` env variable.

- On a UNIX computer, how do you stop a running process?

    You can use the `kill <PID>` command to stop any process assuming you have the proccess id (PID). To stop a process running in the foreground of your terminal you can use `ctrl-C` to send a `SIGINT` signal that will tell the program to stop.

- What packages do you have installed via homebrew?
    
    Learner should be able to paste in the results of a brew list command or at least name packages they have installed. 

- On a UNIX computer, how do you find the process id of a running process?

  By using the `ps` command to list running processes.  

- In a terminal, what does control-c do?

  It sends a SIGINT signal to the running process causing it to quit (usually).

- What would be the result of typing the following commands?
```sh
$ cd /Users/steve
$ mkdir foo
$ touch bar
$ cd foo
$ touch bar
$ pwd
```

```sh
$ cd /Users/steve # Move to the /Users/steve directory
$ mkdir foo       # make a /Users/steve/foo directory
$ touch bar       # create an empty file named /Users/steve/bar
$ cd foo          # move to /Users/steve/foo
$ touch bar       # create an empty file named /Users/steve/foo/bar
$ pwd             # print the working directory: "/Users/steve/foo"
```

- How do you set an environment variable in your shell?

```
export VARNAME=value
```
Where VARNAME is the name of the variable you want to set and value is the value. To set it just for the environment of a single command you can do this:

```
VARNAME=value command
````

If you want the variable to hold this value every time you start a shell put the export command in your `.bashrc`

- What keyboard shortcut do you use to split the screen in your editor?

   Learner should know how to do this in their editor

- How do you create an alias in your shell?
    
```
  alias name=command
```

For example:

```
alias ll='ls -l'
```

If you want the alias to persist put it in your `.bashrc`

- When a terminal command completes, how can you tell if it was successful or not?
    
  Check the value of `$?`. If it is not `0` something went wrong.

- What does your `~/.gitconfig` have in it? (paste the whole file here)

  Learner should be able to find and paste the contents of their .gitconfig file.

- What is the difference between a relative and absolute path?

  A relative path gives the path to a file using the current directory as a reference.
  An absolute path gives the fully qualified path to a file from the root directory (`/`).

  For example, `../foo.txt` is a relative path to a file in the parent directory of the current directory. `/Users/trevor/foo.txt` is an absolute path to a file.

- Lets say you have the following file structure

  ```
  ~
  └── Projects
      ├── pinterest-for-dogs
      │   └── package.json
      └── linkedin-for-dancers
          ├── README.md
          └── package.json
  ```

  And you were in the `linkedin-for-dancers` folder. What command would you use to copy the `README.md` file to the `pinterest-for-dogs` folder?

  ```
  cd README.md ../pinterest-for-dogs
  ```

- What keyboard shortcut do you use, in your editor, to go to a file in the project you have open?

  The learner should know how to do a fuzzy search to open a file without navigating through a source tree with their mouse. Usually this is done with Command+T or Command+P or something similar (not Command+O).

- What files or folders do you want all git repositories to ignore?

  There are a lot of good answers to this question but the learner should probably mention at least the `node_modules` directory.

- What is the main difference between `Array.map` and `Array.forEach` in JavaScript?

  Array.map

### Requirements

- [ ] __50:__ All questions are answered correctly.
