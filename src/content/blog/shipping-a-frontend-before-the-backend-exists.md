---
title: "Shipping a frontend before the backend exists"
description: "The backend isn't ready, the deadline is, and somehow the UI is supposed to be done. A practical guide to building against endpoints that don't exist yet."
date: 2026-10-26
---

The backend isn't ready. The deadline, however, is thrilled to see you. This is a normal Tuesday, and you have two choices: wait politely, or build the UI against endpoints that don't exist yet and look wildly productive. I recommend the second one.

Here's the approach I like. Agree on the shape of the data first. Not the whole schema, just what the screen needs: fields, types, what's optional. Fifteen minutes with whoever owns the backend, written down somewhere. That doc is the whole trick, because it turns "we're blocked" into "we have a plan, and one of us is behind it."

Then stand up skeleton endpoints. I mean that literally: a few GETs and POSTs that return hardcoded data with the total confidence of someone who has never met production. Real HTTP, real URLs, fake answers. Resist the urge to put fixtures straight into your components. If the UI talks to something that behaves like the real API, swapping in the real one later is boring, and boring is the goal.

Make the fake data honest about being annoying. Include the empty list, the absurdly long name, the null that "will never happen," and a slow response or an error. Happy-path mock data produces happy-path demos and an unhappy launch week. Real data is rude, and your mock should be at least a little rude too.

My favorite side effect is that your mocks become a proposal. The backend team can see exactly what the frontend assumed, argue with it early, and fix it before anyone has built it twice. That conversation is far cheaper than discovering a mismatch in staging.

The risks are real. Mocks drift, people forget they're fake, and "temporary" hardcoded data has an impressive life expectancy. So integrate early and often, replace endpoints one at a time as the real ones land, and don't call anything finished until it has run against the real thing.

Done well, both teams keep moving, nobody pretends the mock data is real, and the day the actual API shows up it's a small, anticlimactic change. That's about the nicest thing you can say about an integration.
