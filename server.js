import  express  from "express";


const app = express();

app.get('/', (req, res) => {
    res.send('server is ready');

});

  // get a list of picture

  app.get('/api/jokes', (req,res) => {
    const jokes =[
        
          
          
                {
                    "id": 35642,
                    "joke": "A man walked into a cowboy bar and ordered a beer just as President Bush appeared on the television. After a few sips, he looked up at the television and mumbled, \"Now, there's the biggest horse's ass I've ever seen.\" A customer at the end of the bar quickly stood up, walked over to him, and decked him. A few minutes later, as the man was finishing his beer, Mrs. Bush appeared \n on the television. \"She's a horse's ass too,\" the man. This time, a customer at the other end of the bar quickly stood up, walked over \n to him, and knocked him off his stool. \"Damn it!\" the man said, climbing back up to the bar. \"This must be Bush country!\" \"Nope,\" the bartender replied. \"Horse country!\""
                },
                {
                    "id": 39052,
                    "joke": "The General went out to find that none of his G.I.s were there. One finally ran up, panting heavily.\"Sorry, sir! I can explain, you see I had a date and it ran a little late. I ran to the bus but missed it, I hailed a cab but it broke down, found a farm, bought a horse but it dropped dead, ran 10 miles, and now I`m here.\"The General was very skeptical about this explanation but at least he was here so he let the G.I. go. Moments later, eight more G.I.s came up to the general panting, he asked them why they were late.\"Sorry, sir! I had a date and it ran a little late, I ran to the bus but missed it, I hailed a cab but it broke down, found a farm, bought a horse but it dropped dead, ran 10 miles, and now I`m here.\"The General eyed them, feeling very skeptical but since he let the first guy go, he let them go, too. A ninth G.I. jogged up to the General, panting heavily.\"Sorry, sir! I had a date and it ran a little late, I ran to the bus but missed it, I hailed a cab but...\"\"Let me guess,\" the General interrupted, \"it broke down.\"\"No,\" said the G.I., \"there were so many dead horses in the road, it took forever to get around them.\""
                },
                {
                    "id": 41701,
                    "joke": "A man has a racehorse, never won a race. Man in disgust says, Horse, you win today or you pull a milk wagon tomorrow morning.\" The starting gate opens, the horses take-off, they move the gate away and there lays his horse asleep on the track. He kicks the horse and asks, \"WHY ARE YOU SLEEPING. The horse, half asleep says, \"I have to get up at three in the morning.\""
                }
                
            
    ];
    
    res.send(jokes);
});


const port = process.env.PORT || 3000;
app.listen(port, ()=> {
    console.log(`Server at http://localhost:${port} `);
   }
);