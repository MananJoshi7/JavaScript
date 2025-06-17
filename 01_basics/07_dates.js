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