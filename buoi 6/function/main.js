// Callback
// const doTask = (name, time, cb) => {
//   console.log('Thực hiện công việc: ' + name);
//   setTimeout(() => {
//     cb();
//   }, time);
// };

// const finish = () => {
//   console.log('Hoàn thành công việc');
// };

// // Th1: Các tác vụ có liên quan đến nhau
// // Nhặt rau - Rửa rau - Luộc rau
// console.log('Start');
// doTask('Nhặt rau', 3000, () => {
//   doTask('Rửa rau', 2000, () => {
//     doTask('Luộc rau', 4000, () => {
//       finish();
//     });
//   });
// });
// console.log('End');

// // Th2: Các tác vụ không liên quan đến nhau
// // Ăn cơm - Lướt facebook - Check mail
// console.log('Start');
// doTask('Ăn cơm', 4000, () => {
//   console.log('Ăn cơm xong');
// });
// doTask('Lướt facebook', 2000, () => {
//   console.log('Lướt facebook xong');
// });
// doTask('Check mail', 2500, () => {
//   console.log('Check mail xong');
// });
// console.log('End');

// Promise
// // Promise Pending
// // State: Pending
// // Result: undefined
// const promise = new Promise((resolve, reject) => {});
// console.log(promise);

// // Promise Fulfilled
// // State: Fulfilled
// // Result: "Đi nhậu với bạn"
// const promiseSuccess = new Promise((resolve, reject) => {
//   resolve('Đi nhậu với bạn');
// });
// console.log(promiseSuccess);

// // Promise Rejected
// // State: Rejected
// // Result: "Bận việc gia đình"
// const promiseFail = new Promise((resolve, reject) => {
//   reject('Bận việc gia đình');
// });
// console.log(promiseFail);

// const doTask = (name, time, isOk) => {
//   console.log('Thực hiện công việc: ' + name);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isOk) {
//         resolve('Hoàn thành công việc: ' + name);
//       } else {
//         reject('Không thể hoàn thành công việc: ' + name);
//       }
//     }, time);
//   });
// };

// // Th1: Các tác vụ có liên quan đến nhau
// // Nhặt rau - Rửa rau - Luộc rau
// doTask('Nhặt rau', 3000, true)
//   .then((rs) => {
//     console.log(rs);
//     return doTask('Rửa rau', 2000, false);
//   })
//   .then((rs) => {
//     console.log(rs);
//     return doTask('Luộc rau', 4000, true);
//   })
//   .then((rs) => {
//     console.log(rs);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // Th2: Các tác vụ không liên quan đến nhau
// // Ăn cơm - Lướt facebook - Check mail
// Promise.all([
//   doTask('Ăn cơm', 3000, false),
//   doTask('Lướt facebook', 2000, true),
//   doTask('Check mail', 4000, true),
// ])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Async Await
const doTask = (name, time, isOk) => {
  console.log('Thực hiện công việc: ' + name);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isOk) {
        resolve('Hoàn thành công việc: ' + name);
      } else {
        reject('Không thể hoàn thành công việc: ' + name);
      }
    }, time);
  });
};

// Nhặt rau - Rửa rau - Luộc rau
// async function task1() {};
const handleTask = async () => {
  try {
    let rs = await doTask('Nhặt rau', 3000, true);
    console.log(rs);

    let rs1 = await doTask('Rửa rau', 2000, true);
    console.log(rs1);

    let rs2 = await doTask('Luộc rau', 4000, true);
    console.log(rs2);
  } catch (error) {
    console.log(error);
  }
};

handleTask();
