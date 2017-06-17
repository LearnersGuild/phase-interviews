#### When you run a command in the terminal, where does BASH look for that command?

In the `$PATH` environment variable, looking in each directory from left to right.

#### On a UNIX computer, how do you stop a running process?

Control-C. (send SIGINT / signal interrupt)

#### What packages do you have installed via homebrew?

```
analyze_new_cluster.sh
autoconf
autojump
bash
bash-completion
cmake
delete_old_cluster.sh
doxygen
entr
exercism
fswatch
gdbm
git
haskell-stack
hub
jq
libevent
libffi
libyaml
makedepend
mongodb
neo4j
oniguruma
openssl
pcre
perl
pkg-config
postgresql
postgresql@9.5
python
rbenv
readline
redis
rethinkdb
ruby
ruby-build
ruby-install
sphinx-doc
sqlite
tmux
tree
vim
watchman
wget
xz
```

#### On a UNIX computer, how do you find the process id of a running process?

`ps -A` to see all processes, can search by piping with `grep`: `ps -A | grep <search term>`

#### In a terminal, what does control-c do?

SIGINT

#### In a terminal, what does control-a do?

On my computer, it moves the cursor to the begining of the line.

#### In a terminal, what does control-e do?

On my computer, it moves the cursor to the end of the line.

#### What keyboard shortcut do you use to split the screen in your editor?

Atom: `Shift + Cmd + P` to open command prompt, then search for `Pane` to open the pane commands.

#### What keyboard shortcut do you use to split the screen in your terminal?

`Cmd + D`. But usually I just keep separate tabs open.

#### When a terminal command completes, how can you tell if it was successful or not?

Check the value of the `$?` environment value. 0 = success, non-zero = fail.

```
$ echo $?
```

#### What does your `~/.gitconfig` have in it? (paste the whole file here)

```
[alias]
	st = status
	ci = commit --verbose
	co = checkout
	di = diff
	dc = diff --cached
	l = log --oneline --graph
	amend = commit --amend
	aa = add --all
	ff = merge --ff-only
	pullff = pull --ff-only
	noff = merge --no-ff
	fa = fetch --all
	pom = push origin master
	b = branch
	ds = diff --stat=160,120
	dh1 = diff HEAD~1

	# Divergence (commits we added and commits remote added)
	div = divergence

	# Goodness (summary of diff lines added/removed/total)
	gn = goodness
	gnc = goodness --cached

	# Fancy logging.
	#   h = head
	#   hp = head with patch
	#   r = recent commits, only current branch
	#   ra = recent commits, all reachable refs
	head = !git r -1
	h = !git head
	r = !GIT_NO_PAGER=1 git l -30
	ra = !git r --all
[branch]
	autosetuprebase = always
[core]
	excludesfile = ~/.gitignore
	editor = vim
[color]
	diff = auto
	status = auto
	branch = auto
	ui = true
[credential]
	helper = osxkeychain
[help]
	autocorrect = 1
[merge]
	tool = vimdiff
[user]
	name = **NOT GONNA TELL YA**
	email = **NOT GONNA TELL YA***
```

#### What is the difference between a relative and absolute path?

Absolute paths start from the "root" of any given system. In a filesystem, this is `/`.

Relative paths show the position of a file relative to the current working directory / file.

#### Lets say you have the following file structure

```
~
└── Projects
    ├── pinterest-for-dogs
    │   ├── README.md
    │   └── package.json
    └── linkedin-for-dancers
        ├── README.md
        └── package.json
```

And you were in the `linkedin-for-dancers` folder. What command would you use to change folders to the `pinterest-for-dogs` folder?

```
$ cd ../pinterest-for-dogs
```

#### What keyboard shortcut do you use, in your editor, when you want to open a specific file?

`Cmd + T`

#### What files or folders do you want all git repositories to ignore?

Well, here's my global `~/.gitignore` file:

```
# Global .gitignore

# Compiled source #
###################
*.com
*.class
*.dll
*.exe
*.o
*.so

# Packages #
############
# it's better to unpack these files and commit the raw source
# git has its own built in compression methods
*.7z
*.dmg
*.gz
*.iso
*.jar
*.rar
*.tar
*.zip

# Logs and databases #
######################
*.log
# *.sql
*.sqlite

# OS generated files #
######################
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.dbp

# Common filetypes #
####################

# Vim
*.swp

# GitHub pages #
################
.sass-cache
_site
.jekyll-metadata
```

#### What is the main difference between `==` and `===` in JavaScript?

`==` does type conversion (it tries to make the two objects the same type before it checks equality), whereas `===` just compares the two raw objects to see if they are the same.
