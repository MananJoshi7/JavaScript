let myDate = new Date;
console.log(myDate); // 2025-06-17T04:30:17.785Z

console.log(myDate.toString()) // Tue Jun 17 2025 04:33:27 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toISOString()); // Tue Jun 17 2025 04:35:34 GMT+0000 (Coordinated Universal Time)
                                   // 2025-06-17T04:35:34.052Z

console.log(myDate.toJSON()); // Tue Jun 17 2025 04:37:06 GMT+0000 (Coordinated Universal Time)
                              // 2025-06-17T04:37:06.586Z
                              // 2025-06-17T04:37:06.586Z

console.log(myDate.toLocaleDateString()); // Tue Jun 17 2025 04:38:31 GMT+0000 (Coordinated Universal Time)
                                          // 2025-06-17T04:38:31.666Z
                                          // 2025-06-17T04:38:31.666Z
                                          // 6/17/2025

console.log(myDate.toLocaleString()); // Tue Jun 17 2025 04:40:12 GMT+0000 (Coordinated Universal Time)
                                      // 2025-06-17T04:40:12.360Z
                                      // 2025-06-17T04:40:12.360Z
                                      // 6/17/2025
                                      // 6/17/2025, 4:40:12 AM

let myCreatedDate = new Date(2025,0,23);
console.log(myCreatedDate.toDateString()); // Thu Jan 23 2025

let myCreatedDate1 = new Date(2025, 3, 16, 4, 9);
console.log(myCreatedDate1.toLocaleString()); // 4/16/2025, 4:09:00 AM

let newDate = new Date();
console.log(newDate.getDate()); // 17
console.log(newDate.getDay()); // 2
console.log(newDate.getFullYear()); // 2025
console.log(newDate.getHours()); // 6
console.log(newDate.getMilliseconds());

