---
title: 'Git Rebase and Squash'
date: '2020-08-07'
snippet: 'At my previous workplace, I used a git GUI to handle all my git operations so I was not comfortable using the command line. Now, I am soley using the command line and talk about some handy commands that you can use.'
author:
  name: 'Paul Chong'
  picture: '/profilepic.jpg'
tag: 'Snippets'
---

## Git Rebase and Squash

I learned something new today: using `git rebase -i`. I was working on some code and submitted my work for code review. After receiving feedback, I wanted to go back and update my code but I didn't want to have a whole new commit just for that update. Essentially what I wanted to do was edit my intial commit to include the "fixes" for the feedback. Enter `git rebase -i`.

I updated the code to fulfill the code review's feedback, created a new commit with a new message (like "Fixes \${code review feedback}"), and used `git rebase -i`. The `-i` in this command stands for interactive and it opens up an editor within your Terminal that shows you all the commits that are in question. In this instance, I had two commits: the initial and the "fixed". To the left of each commit, there were commands you could apply such as pick, reword, edit, squash, fixup, exec, and drop. I opted to leave the initial commit with `pick` and changed the "fixed" commit to `squash`.

After saving and exiting the editor, I was prompted with another editor that allowed me to choose a commit message. I deleted the "Fixes \${code review feedback}" message and left the original message from my initial commit. Fin.

I now had the "fixes" from the code review feedback squashed into my intial commit!

If you'd like to learn more about Rewriting Git History check it out [here](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History).
