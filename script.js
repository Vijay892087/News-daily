// ==========================
// THE GLOBAL EXPRESS
// ADMIN DASHBOARD JS
// ==========================

// Section Switch

function showSection(sectionId){

document.querySelectorAll('.admin-section').forEach(section=>{
    section.style.display="none";
});

document.getElementById(sectionId).style.display="block";

}

// ==========================
// NEWS STORAGE
// ==========================

let newsData = JSON.parse(localStorage.getItem("newsData")) || [];

const newsForm = document.getElementById("newsForm");

if(newsForm){

newsForm.addEventListener("submit",function(e){

e.preventDefault();

const title=document.getElementById("newsTitle").value;
const description=document.getElementById("newsDescription").value;
const image=document.getElementById("newsImage").value;

const news={
    title:title,
    description:description,
    image:image
};

newsData.push(news);

localStorage.setItem("newsData",JSON.stringify(newsData));

alert("News Added Successfully");

this.reset();

loadNews();

});

}

// ==========================
// LOAD NEWS TABLE
// ==========================

function loadNews(){

const newsTable=document.getElementById("newsTable");

if(!newsTable) return;

newsTable.innerHTML="";

newsData.forEach((news,index)=>{

    newsTable.innerHTML+=`
    <tr>
        <td>${news.title}</td>
        <td>
            <button class="btn btn-danger"
            onclick="deleteNews(${index})">
            Delete
            </button>
        </td>
    </tr>
    `;
});

updateDashboard();

}

// ==========================
// DELETE NEWS
// ==========================

function deleteNews(index){

newsData.splice(index,1);

localStorage.setItem("newsData",
JSON.stringify(newsData));

loadNews();

}

// ==========================
// DASHBOARD COUNTS
// ==========================

function updateDashboard(){

const newsCount=document.getElementById("newsCount");

if(newsCount){
    newsCount.innerText=newsData.length;
}

const members=
JSON.parse(localStorage.getItem("members")) || [];

const reviews=
JSON.parse(localStorage.getItem("reviews")) || [];

const contacts=
JSON.parse(localStorage.getItem("contacts")) || [];

if(document.getElementById("memberCount"))
document.getElementById("memberCount").innerText=members.length;

if(document.getElementById("reviewCount"))
document.getElementById("reviewCount").innerText=reviews.length;

if(document.getElementById("contactCount"))
document.getElementById("contactCount").innerText=contacts.length;

}

// ==========================
// MEMBERS TABLE
// ==========================

function loadMembers(){

const table=document.getElementById("memberTable");

if(!table) return;

const members=
JSON.parse(localStorage.getItem("members")) || [];

table.innerHTML="";

members.forEach(member=>{

    table.innerHTML+=`
    <tr>
        <td>${member.name}</td>
        <td>${member.mobile}</td>
    </tr>
    `;
});

}

// ==========================
// REVIEWS TABLE
// ==========================

function loadReviews(){

const table=document.getElementById("reviewTable");

if(!table) return;

const reviews=
JSON.parse(localStorage.getItem("reviews")) || [];

table.innerHTML="";

reviews.forEach(review=>{

    table.innerHTML+=`
    <tr>
        <td>${review.name}</td>
        <td>${review.review}</td>
    </tr>
    `;
});

}

// ==========================
// CONTACTS TABLE
// ==========================

function loadContacts(){

const table=document.getElementById("contactTable");

if(!table) return;

const contacts=
JSON.parse(localStorage.getItem("contacts")) || [];

table.innerHTML="";

contacts.forEach(contact=>{

    table.innerHTML+=`
    <tr>
        <td>${contact.name}</td>
        <td>${contact.email}</td>
        <td>${contact.message}</td>
    </tr>
    `;
});

}

// ==========================
// INITIAL LOAD
// ==========================

window.onload=function(){

loadNews();
loadMembers();
loadReviews();
loadContacts();
updateDashboard();

};
