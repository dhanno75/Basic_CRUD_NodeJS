// User
const user = [
  {
    name: "Vivek",
    joining_date: "08/10/2020",
    email: "vivek@gmail.com",
    companyAttended: "Google",
    mentor: "Priya",
  },
  {
    name: "Rohan",
    joining_date: "02/10/2020",
    email: "rohan@gmail.com",
    companyAttended: "Amazon",
    mentor: "Jagdish",
  },
  {
    name: "Shreya",
    joining_date: "16/10/2020",
    email: "shreya@gmail.com",
    companyAttended: "Vmware",
    mentor: "Jagdish",
  },
  {
    name: "Hema",
    joining_date: "16/10/2020",
    email: "hema@gmail.com",
    mentor: "Sneha",
  },
  {
    name: "Shanta",
    joining_date: "16/10/2020",
    email: "shanta@gmail.com",
    mentor: "Anupam",
  },
];

// codekata
const codekata = [
  {
    userName: "Vivek",
    array: 34,
    string: 58,
    mathematics: 14,
  },
  {
    userName: "Rohan",
    array: 8,
    string: 66,
    mathematics: 44,
  },
  {
    userName: "Shreya",
    array: 96,
    string: 13,
    mathematics: 41,
  },
  {
    userName: "Hema",
    array: 77,
    string: 12,
    mathematics: 67,
  },
  {
    userName: "Shanta",
    array: 44,
    string: 18,
    mathematics: 54,
  },
];

// db.users.aggregate([
//   {
//     $lookup: {
//       from: "codekata",
//       localField: "name",
//       foreignField: "userName",
//       as: "Total_problems_solved",
//     },
//   },
// ]);

// Company drives
const companyDrives = [
  { companyName: "Google", date: ISODate("2020-10-18T08:15:39.736Z") },
  { companyName: "Amazon", date: ISODate("2020-10-21T08:15:39.736Z") },
  { companyName: "Akamai", date: ISODate("2020-10-24T08:15:39.736Z") },
  { companyName: "Netflix", date: ISODate("2020-10-26T08:15:39.736Z") },
  { companyName: "Facebook", date: ISODate("2020-10-30T08:15:39.736Z") },
  { companyName: "Vmware", date: ISODate("2020-11-02T08:15:39.736Z") },
  { companyName: "Honeywell", date: ISODate("2020-11-05T08:15:39.736Z") },
];

// Topics
const topics = [
  {
    topicName: "Introduction to Javascript",
    taughtInMonth: ISODate("2020-10-05T08:15:39.736Z"),
    tasks: [
      {
        task: "Write a blog on Difference between HTTP1.1 vs HTTP2",
        deadLine: "October 7th, 2020",
      },
      {
        task: "Create your resume data in JSON format",
        deadLine: "October 7th, 2020",
      },
    ],
  },
  {
    topicName: "Promises",
    taughtInMonth: ISODate("2020-10-12T08:15:39.736Z"),
    tasks: [
      {
        task: "Rest countries and weather fetch API",
        deadLine: "October 15th, 2020",
      },
      {
        task: "Using 3 apis finish the fetch api task",
        deadLine: "October 15th, 2020",
      },
    ],
  },
  {
    topicName: "React",
    taughtInMonth: ISODate("2020-10-16T08:15:39.736Z"),
    tasks: [
      {
        task: "Price cart bootstrap",
        deadLine: "October 18th, 2020",
      },
      {
        task: "value from one component to another",
        deadLine: "October 18th, 2020",
      },
    ],
  },
  {
    topicName: "MongoDB",
    taughtInMonth: ISODate("2020-11-02T08:15:39.736Z"),
    tasks: [
      {
        task: "write a blog on mongodb",
        deadLine: "November 3rd, 2020",
      },
    ],
  },
];

const tasks = [
  {
    task: "Write a blog on Difference between HTTP1.1 vs HTTP2",
    deadLine: "October 7th, 2020",
  },
  {
    task: "Create your resume data in JSON format",
    deadLine: "October 7th, 2020",
  },
];

const mentors = [
  {
    mentorName: "Jagdish",
    mentorEmail: "jagdish@gmail.com",
    students: 40,
  },
  {
    mentorName: "Sneha",
    mentorEmail: "sneha@gmail.com",
    students: 72,
  },
  {
    mentorName: "Anupam",
    mentorEmail: "anupam@gmail.com",
    students: 120,
  },
  {
    mentorName: "Priya",
    mentorEmail: "priya@gmail.com",
    students: 103,
  },
];

/*
db.user.aggregate([
  {
    "$project": {
      name: 1,
      totalCodekataSolved: {
        "$add": [
          "$codekata[0]['array']",
          "$codekata[0]['string']"
        ]
      }
    },
    
  }
])

// 1
db.topics.aggregate([
  {
    "$project": {
      topicName: 1,
      tasks: 1,
      taughtInMonth: {
        $month: "$taughtInMonth"
      }
    }
  },
  {
    $match: {
      taughtInMonth: 10
    }
  }
])

// 2
db.companyDrives.find({
  "date": {
    "$gte": ISODate("2020-10-15"),
    $lt: ISODate("2020-10-31")
  }
})

// 3
db.users.aggregate([
  {
    $lookup: {
      from: "companyDrives",
      localField: "companyAttended",
      foreignField: "companyName",
      as: "CompanyDetails"
    }
  }
])

// 4


*/
