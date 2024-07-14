/*Type of random messages: LifeAdvice

Message Pool Categories:
    Motivation and Inspiration
    Mindfulness and Gratitude
    Relationships and Love
    Personal Growth and Development
    Overcoming Challenges
    Happiness and Fulfillment
    Time Management and Productivity
    Health and Wellness
*/

const messageCategories = {
    motivation: [
        "Believe in yourself, and you're halfway there.",
        "The only limit is the one you impose on yourself.",
        "Every day is a new beginning. Embrace it with hope.",
    ],
    mindfullness: [
        "Focus on the journey, not just the destination.",
        "Be grateful for what you have; you'll end up having more.",
        "Find peace within yourself."
    ],
    relationships: [
       "Communication is the key to any relationship.",
       "Love deeply and unconditionally.",
       "Choose your friends wisely."
    ],
    personalGrowth: [
        "Communication is the key to any relationship.",
        "Love deeply and unconditionally.",
        "Choose your friends wisely."
    ],
    overcomingChallenges: [
        "Every challenge is an opportunity to grow stronger.",
        "Don't let setbacks define you; let them refine you.",
        "Perseverance is key to overcoming obstacles."
    ],
    happiness: [
        "Happiness is not a destination; it's a journey.",
        "Find joy in the little things.",
        "Pursue your passions with enthusiasm."
    ],
    productivity: [
        "Prioritize tasks and focus on what matters.",
        "Take breaks to recharge.",
        "Time management is self-management."
    ],
    health: [
        "Nourish your body and mind.",
        "Sleep is essential for overall well-being.",
        "Find a physical activity you enjoy."
    ]
};

function createMessageArray(poolMessage) {
    const allMessages = [];
    for (const category in poolMessage) {
      allMessages.push(...poolMessage[category]);
    }
    return allMessages;
}
  
const allLifeAdvices = createMessageArray(messageCategories);
console.log(allLifeAdvices);