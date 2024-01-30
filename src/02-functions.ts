import { friends } from './01-basics'
import {Friend, Colleague,EmailContact,FriendName } from './myTypes'
import { colleagues } from './01-basics';



function allOlder(friends: Friend[]): string[] {
    return friends.map((friend) => {
      friend.age += 1;
      return `${friend.name} is now ${friend.age}`;
    });
  }
  function findFriends(friends: Friend[], criterion: (friend: Friend) => boolean): FriendName[] {
    const filteredFriends = friends.filter(criterion);
    const result: FriendName[] = filteredFriends.map((friend) => ({ friend.name }));
    return result;;
    return result;
  }
  
  // Example usage:
  console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
  console.log(findFriends(friends, (friend) => friend.age < 35));
  function highestExtension(cs: Colleague[]) {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  function addColleague(cs: Colleague[], name: string, department: string, email: string): void {
    const extension = cs.length > 0 ? highestExtension(cs).contact.extension + 1 : 100;
    cs.push({
      name,
      department,
      contact: { email, extension },
    });
  }

  function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number
  ): EmailContact[] {
    const sorted = colleagues.sort(sorter); // Colleague[] inferred
    const result: EmailContact[] = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return result 
  }
  
  console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
  console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));

  
  
  addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
  console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));
  




console.log(allOlder(friends));
