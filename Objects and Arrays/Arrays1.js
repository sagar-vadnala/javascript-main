
var mFriends = ['Sagar', 'vivek', 'vamshi']
console.log(mFriends)
console.log(typeof(mFriends))

//Arrays are the special type of objects which store the list of data they use position to access data
console.log(mFriends[0])
console.log(mFriends[1])

//updata a value

mFriends[0] = 'vadnala'
console.log(mFriends)

//Add more items
mFriends[3] = 'varun'
console.log(mFriends)

//we can add by using length and also by push which are not error prone
mFriends[mFriends.length]='Rob'
console.log(mFriends)

mFriends.push("jack")
console.log(mFriends)

//delete a value
//pop is used to delete
//it delets the last element of the array
//syntax

var mName = mFriends.pop()
console.log(mName)