let pets = [ {

    _id: 1,
    
    name: 'Example Osito',
    parents: {

        userId: 1,
        
        name: 'ExampleParent',
        
        phone: '123-456-7890'
        
        },
        
        type: 'Dog',
        
        breed: 'Mutt',
        
        sex: 'F',
        
        age: 5,
        
        microchipped: true,
        
        picture: '',
        
        behavior: {
        
        specialNeeds: 'none',
        
        routine: 'walks 3 times a day',
        
        trainingRouting: 'none',
        
        fears: 'stairs',
        
        notes: 'none'
        
        },
        
        health: {
        
            isMedicated: true,

            medicationInfo: [{
        
                type: 'pills',
        
                amount: '1',
        
                time: 'breakfast',
        
                details: 'one joint care pill with breakfast'
        
              }]
        },

        allergies: {
        
        hasAllergies: true,
        
        type: 'food',
        
        careInstructions: 'Cannot eat peaches',
        
        additionalInfo: 'none'
        
        },
        
        weight: 23,
        
        size: 'small',
        
        needs: 'nothing special, just some love',
        
        lastVetVisit: '01/25/2024',
        
        vaccines: [{
        
        date: '01/25/2024',
        
        type: 'rabies',
        
        },
        {
        
            date: '01/25/2024',
            
            type: 'DA2PP',
            
            }],
        
        food: {
        
        frequency: 'discretionary',
        
        foodAllergies: 'peaches',
        
        restrictions: 'no peaches please',
        
        notes: 'none',
        
        meals: [{
        
        meal: 'discretionary',
        
        amount: '2 cups a day',
        
        type: 'kibble', 
        
        brand: 'Kirkland',
        
        }],
        
        },
        
        treats: {
        
        daily: true,
        
        type: [{
        
        brand: 'huesitos',
        
        type: 'chewing',
        
        amount: '1 daily'
        
        }]
        
        },
        
        walks: {
        
        needs: true,
        
        amountDaily: 3,
        
        distanceInMiles: 1,
        
        timeInMinutes: 30,
        
        route: {details: 'details of route'},
        
        preferences: 'none',
        
        habits: 'eats cat poop', 
        
        details: 'please avoid cat poop',
        
        },
        
        toys: ['huesito', 'balls'],
        
        relevantInformation: 'wants to play with ball ALL the time' 
        
        }
];

module.exports = pets