import { friends } from './01-basics'
import {Friend, Colleague } from './myTypes'
import { colleagues } from './01-basics';



function allOlder(friends: Friend[]): string[] {
    return friends.map((friend) => {
      friend.age += 1;
      return `${friend.name} is now ${friend.age}`;
    });
  }
  function highestExtension(cs: Colleague[]): Colleague {
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
  
  
  addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
  console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));
  




console.log(allOlder(friends));
