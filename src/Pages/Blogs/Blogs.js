import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-20 '>
            <h2 className='text-xl'>1. How will you improve the performance of a React Application?</h2>
            <p className='mt-2'>  ans :Optimize React rendering, you need to make sure that components receive only necessary props. It will let you control the CPU consumption and avoid over-rendering unnecessary features. The solution is to create a functional component that will collect all props and redistribute them to other components.</p>
            <h2 className='text-xl mt-2'>2. What are the different ways to manage a state in a React application?</h2>
            <p className='mt-2'>  ans:State management is simply a way to engender communication and sharing of data across components. It creates a concrete data structure to represent your app's State that you can read and write. Since React 16.8, every React component, whether functional or class, can have a state.</p>
            <h2 className='text-xl mt-2'> 3.How does prototypical inheritance work?</h2>
            <p className='mt-2'>  ans:The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object.</p>
            <h2 className='text-xl mt-2'> 4.Why you do not set the state directly in React.</h2>
            <p className='mt-2'>  ans:React will then look at the virtual DOM, it also has a copy of the old virtual DOM, that is why we shouldn't update the state directly, so we can have two different object references in memory, we have the old virtual DOM as well as the new virtual DOM.</p>
            <h2 className='text-xl mt-2'> 5.What is a unit test? Why should write unit tests?</h2>
            <p className='mt-2'>  ans:Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.</p>

        </div>
    );
};

export default Blogs;