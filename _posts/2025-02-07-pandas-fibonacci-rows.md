---
layout: post
title: Python lambda function to return row numbers that are in a Fibonacci Sequence
date: 2025-02-07T16:36:09+0000 GMT
categories: blog
tags:
  - python
  - pandas
  - fun
featured: true
---

On LinkedIn, I often see people posting [pandas](https://pandas.pydata.org/docs/index.html) code snippets for various things.  This week I was looking at a post about using `.iloc()` to return certain rows by row number.  

This got me wondering whether it was possible to return row numbers that happen to be in a Fibonacci Sequence; using lambda expressions.  Turns out this is possible.  Hopefully not one to turn up during an interview whiteboarding session though!

<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=from%2520functools%2520import%2520reduce%250Adf.iloc%255Blambda%2520_df%253A%2520list%28filter%28lambda%2520x%253A%2520x%2520%253C%253D%2520_df.shape%255B0%255D%252C%2520%28lambda%2520f%253A%2520f%28f%252C%25200%252C%25201%252C%2520%255B%255D%29%29%28lambda%2520self%252C%2520a%252C%2520b%252C%2520seq%253A%2520seq%2520if%2520a%2520%253E%2520_df.shape%255B0%255D%2520else%2520self%28self%252C%2520b%252C%2520a%2520%252B%2520b%252C%2520seq%2520%252B%2520%255Ba%255D%29%29%29%29%255D.drop_duplicates%28%29"
  style="width: 1024px; height: 242px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>

**Further Reading**
[Wikipedia - Fibonacci sequence](https://en.wikipedia.org/wiki/Fibonacci_sequence)

 