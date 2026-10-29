---
title: "Reviewing agent output like a philosophy student"
description: "Four years of arguing about whether a chair exists turns out to be good preparation for asking an AI whether it actually did what it said it did."
date: 2026-10-27
---

I spent four years at Texas A&M studying philosophy, a fact my career has never once required me to defend at a party. It turns out to be the most useful thing I own for working with agents. Not because I read the right books, but because the main skill in a philosophy seminar is looking at a confident statement and asking what it's standing on.

Agents are very confident. "I've fixed the bug and verified the tests pass" sounds finished, and it might describe something that happened, something that was attempted, or something that was merely hoped for. A decent seminar would take that sentence apart in about ninety seconds. So the first move is to separate what the agent said from what the diff shows. Did it run the tests, or write tests and describe running them? Did it fix the cause or just quiet the symptom? The claim and the evidence are different things, and reviewing means making the agent produce the second one.

The second move is to hunt for the slide. Most bad arguments work by letting a word mean one thing early and another thing late. "Done" is the classic. Done as in it compiles, done as in it works, or done as in a human could ship it? Agents will cheerfully answer the easy version and let you assume the hard one. Pin down the definition before you start, and check against it at the end.

Third, argue the other side. Before approving, ask what would have to be true for this to be wrong. What input breaks it? What did it quietly assume? It's the same habit as writing the strongest objection to your own thesis, and it catches an embarrassing number of problems, including some I introduced myself.

Last, and this is the uncomfortable one, a lot of bad agent output is good output for a bad request. If you didn't say what you wanted precisely, you got a precise answer to something vaguer. Half of reviewing is realizing the prompt was the flawed premise. Philosophy teaches that too, since most arguments go wrong in the first sentence.

None of this is exotic. It's skepticism with decent manners. "Looks right to me" is not a review. "Here's what this claims, here's what supports it, and here's what I checked" is.
