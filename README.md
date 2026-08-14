# Campsite webapp for a client

Okay, this is my first for real webapp / project. I got asked by an acquaintance in the local area if i could put together a website for him, which obviously i accepted. It really opened my eyes as to what its like working with a proper client, and how much goes on in the background.

## Technologies

Fairly simple, given theres no backend (for now), i used react with tailwind and motion, and mainly focused on making it as polished and optimised as possible. Now obviously, given theres almost 20 images, the lighthouse performance does tank quite a bit, which is a shame, but kind of unavoidable. The code itself is i think pretty clean and well legible, atleast more so than some of my other stuff. I also worked with react hotkeys for keyboard nav through the lightbox, aswell as React Router, but thats i think basically just the usual stuff.

### API and Upkeep

As for some more interesting things, theres obviously embeds, which actually require much less effort than i thought, but since im doing SEO optimization, i had to make an json ld script, which would go out of date after a while, so im using Google API to get some data about the campsite automatically. I accompany this with vercels cron jobs, which i set up to run on the first of every month at 3:00, which guarantees that the data isnt out of date. Aside from that theres not really that much, i worked on og images and descriptions, meta properties, and selfhosted my fonts for better performance.

### Deployment

Finally the deployment, obviously i used vercel, but i needed a real domain aswell, which we bought through cloudflare registrar, and all that was left was to add the cname records that i got from vercel, and wait for the dns to resolve. Since it was the first time i did this, i thought i had messed up since it wasnt working, but infact it was just the dns taking its sweet time to resolve.

## Final thoughts

All in all im pretty happy with how it turned out, obviously not the most mindblowing project, but the client wanted something clean and polished to see if a webpage is worth it, and i think i managed to deliver on it.
