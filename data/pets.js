let pets = [ 
    {
        "id": 1,
        "name": "Snowball I",
        "type": "Cat",
        "breed": "white",
        "sex": "F",
        "age": "1",
        "size": "fluffy",
        "food": false,
        "walks": false,
        "medication": false,
        "picture": "/Users/cata/Documents/PerScholas/SBA318/CRM-API/public/images/1714232782105.png"
      },
      {
        "id": 2,
        "name": "Snowball II",
        "type": "Cat",
        "breed": "grey",
        "sex": "M",
        "age": "2",
        "size": "skinny cat",
        "food": false,
        "walks": false,
        "medication": false,
        "picture": "/Users/cata/Documents/PerScholas/SBA318/CRM-API/public/images/1714232812969.png"
      },
      {
        "id": 3,
        "name": "Snowball II",
        "type": "Cat",
        "breed": "brown",
        "sex": "F",
        "age": "1",
        "size": "fluffy",
        "food": true,
        "walks": false,
        "medication": false,
        "picture": "/Users/cata/Documents/PerScholas/SBA318/CRM-API/public/images/1714232862576.jpeg"
      },
      {
        "id": 4,
        "name": "Snowball IV (Coltrane)",
        "type": "Cat",
        "breed": "white",
        "sex": "M",
        "age": "2",
        "size": "big head",
        "food": true,
        "walks": false,
        "medication": false,
        "picture": "/Users/cata/Documents/PerScholas/SBA318/CRM-API/public/images/1714232896048.jpeg"
      },
      {
        "id": 5,
        "name": "Snowball V",
        "type": "Cat",
        "breed": "grey",
        "sex": "F",
        "age": "38",
        "size": "skinny cat",
        "food": true,
        "walks": true,
        "medication": false,
        "picture": "/Users/cata/Documents/PerScholas/SBA318/CRM-API/public/images/1714232927272.jpeg"
      }
];

module.exports = pets

// {
    // _id: 1,
    // name: 'Example Osito',
    // parents: {
    //     userId: 1,   
    //     name: 'ExampleParent',   
    //     phone: '123-456-7890'   
    //     },   
    //     type: 'Dog',   
    //     breed: 'Mutt',   
    //     sex: 'F',   
    //     age: 5,   
    //     microchipped: true,   
    //     picture: '',   
    //     behavior: {   
    //     specialNeeds: 'none',   
    //     routine: 'walks 3 times a day',   
    //     trainingRouting: 'none',   
    //     fears: 'stairs',   
    //     notes: 'none'   
    //     },   
    //     health: {   
    //         isMedicated: true,
    //         medicationInfo: [{   
    //             type: 'pills',   
    //             amount: '1',   
    //             time: 'breakfast',   
    //             details: 'one joint care pill with breakfast'   
    //           }]
    //     },
    //     allergies: {       
    //     hasAllergies: true,       
    //     type: 'food',       
    //     careInstructions: 'Cannot eat peaches',       
    //     additionalInfo: 'none'       
    //     },       
    //     weight: 23,       
    //     size: 'small',       
    //     needs: 'nothing special, just some love',       
    //     lastVetVisit: '01/25/2024',       
    //     vaccines: [{       
    //     date: '01/25/2024',       
    //     type: 'rabies',       
    //     },
    //     {       
    //         date: '01/25/2024',           
    //         type: 'DA2PP',           
    //         }],       
    //     food: {       
    //     frequency: 'discretionary',       
    //     foodAllergies: 'peaches',       
    //     restrictions: 'no peaches please',       
    //     notes: 'none',       
    //     meals: [{       
    //     meal: 'discretionary',       
    //     amount: '2 cups a day',       
    //     type: 'kibble',        
    //     brand: 'Kirkland',       
    //     }],       
    //     },       
    //     treats: {       
    //     daily: true,       
    //     type: [{       
    //     brand: 'huesitos',       
    //     type: 'chewing',       
    //     amount: '1 daily'       
    //     }]       
    //     },       
    //     walks: {       
    //     needs: true,       
    //     amountDaily: 3,       
    //     distanceInMiles: 1,       
    //     timeInMinutes: 30,       
    //     route: {details: 'details of route'},       
    //     preferences: 'none',       
    //     habits: 'eats cat poop',        
    //     details: 'please avoid cat poop',       
    //     },       
    //     toys: ['huesito', 'balls'],       
    //     relevantInformation: 'wants to play with ball ALL the time' 
    //     }