const home = document.getElementById('home')
const about = document.getElementById('about')
const project = document.getElementById('project')
const contact = document.getElementById('contact')
const skills = document.getElementById('skills')

const cross = document.getElementById('cross');
const mobileNav = document.getElementById('mobileNav');
const mobilePages = document.getElementById('mobilePages');
const resume = document.getElementById('resume');
const info = document.getElementById('info');



window.onload = ()=>
{
    about.style.display = 'none'
    contact.style.display = 'none'
    project.style.display = 'none'
    skills.style.display = 'none'
    java.style.display = 'none'

}


const homeFun = (element)=>
{
    if(element=='1')
    {
        mobileNav.style.width = '0px';
    }


    home.style.display = '';
    about.style.display = 'none';
    contact.style.display = 'none';
    project.style.display = 'none';
    skills.style.display = 'none';
}


const aboutFun = (element)=>
{
    if(element=='1')
    {
        mobileNav.style.width = '0px';
    }
    home.style.display = 'none';
    about.style.display = '';
    contact.style.display = 'none';
    project.style.display = 'none';
    skills.style.display = 'none';
}


const skillFun = (element)=>
{
    if(element=='1')
    {
        mobileNav.style.width = '0px';
    }
    home.style.display = 'none';
    about.style.display = 'none';
    contact.style.display = 'none';
    project.style.display = 'none';
    skills.style.display = '';
}



const projectFun = (element)=>
{
    if(element=='1')
    {
        mobileNav.style.width = '0px';
    }
    home.style.display = 'none';
    about.style.display = 'none';
    contact.style.display = 'none';
    project.style.display = '';
    skills.style.display = 'none';
}


const contactFun = (element)=>
{
    if(element=='1')
    {
        mobileNav.style.width = '0px';
    }
    home.style.display = 'none';
    about.style.display = 'none';
    contact.style.display = '';
    project.style.display = 'none';
    skills.style.display = 'none';
}




const mobileToggle = (event)=>
{
    if(event==='1')
    {
        mobileNav.style.display = 'inherit'    
        mobileNav.style.width = '70%';
    }
    else
    {
        mobileNav.style.width = '0px';
    }
}