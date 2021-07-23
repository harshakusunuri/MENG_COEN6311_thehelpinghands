import React from 'react'

import { Container, Navbar, Nav } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import HomeScreen from "./HomeScreen";
import DonationScreen from "./DonationScreen";

import image from "../images/MotoOfOurOrganization.JPG"



function MotoOfOurOrganizationScreen() {
    return (
        <div id='page_top' style={{ display: 'flex' }}>
            {/* console.log(disasterImg); */}

            {/* <img href='%PUBLIC_URL%/MotoOfOurOrganization.JPG' /> */}
            {/* <img href={process.env.PUBLIC_URL + "/MotoOfOurOrganization.JPG"} /> */}

            <div class='navbar' style={{
                width: '290%', position: 'sticky', background: '#eafff1', height: '260%', 'border-radius': '10px',
                top: '16%', 'box-shadow': '0 0 5px #000'
            }}>
                <h5>  <Nav defaultActiveKey="/" className="flex-column"><h4>Contents of the Page:</h4>
                    <p>MOTO OF OUR ORGANIZATION</p>

                    <p >HOW TO HELP YOUR COMMUNITY AFTER A NATURAL DISASTER</p>
                    <p >FIVE REASONS FOR DONATING TO CHARITY</p>
                    <p >MOTO TO VOLUNTEER</p>
                    {/* 

                     <Nav.Link href="/#page_top"><i class="fas fa-arrow-alt-circle-up"></i>TOP of the Page</Nav.Link>

                    <Nav.Link href="/#HOW_TO_HELP">HOW TO HELP YOUR COMMUNITY AFTER A NATURAL DISASTER</Nav.Link>
                    <Nav.Link href="/#FIVE_REASONS">FIVE REASONS FOR DONATING TO CHARITY</Nav.Link>
                    <Nav.Link href="/#MOTO_TO_VOLUNTEER">MOTO TO VOLUNTEER</Nav.Link>

                    <Nav.Link href="/MotoOfOurOrganizationScreen#MOTO_TO_VOLUNTEER">MOTO TO VOLUNTEER</Nav.Link> */}

                </Nav>
                    <Link to='/DonationScreen' style={{
                        color: 'rgb(50 55 39)', 'background-color': 'rgb(255 203 5)'
                    }} ><i class="fas fa-hand-holding-usd"></i>Donations link</Link>
                </h5>
            </div>

            <div id='matter_data' style={{ textAlign: 'justify' }} className='my-3 p-3'>

                <p id='Para1'>

                    <h4 id='' ><i class="fas fa-crosshairs"></i>Moto Of Our Organization</h4>
                    The COVID‐19 pandemic poses an exceptional challenge for humanity. Because public behaviour
                    is key to curbing the pandemic at an early stage, it is important for social psychological
                    researchers to use their knowledge to promote behaviours that help manage the crisis. Here,
                    we identify human values as particularly important in driving both behavioural compliance to
                    government guidelines and promoting prosocial behaviours to alleviate the strains arising
                    from a prolonged pandemic. Existing evidence demonstrates the importance of human values,
                    and the extent to which they are shared by fellow citizens, for tackling the COVID‐19 crisis.
                    Individuals who attach higher importance to self‐transcendence (e.g., responsibility) and
                    conservation (e.g., security) values are likely to be more compliant with COVID‐19 behavioural
                    guidelines and to help others who are struggling with the crisis. Further, believing that fellow
                    citizens share one's values has been found to elicit a sense of connectedness that may be
                    crucial in promoting collective efforts to contain the pandemic. The abstract nature of values,
                    and cross‐cultural agreement on their importance, suggests that they are ideally suited to
                    developing and tailoring effective, global interventions to combat this pandemic.

                </p>

                <h4 id='HOW_TO_HELP' >HOW TO HELP YOUR COMMUNITY AFTER A NATURAL DISASTER</h4>
                <p>
                    <img src={image} style={{ width: '100%' }} />

                    <p>In the aftermath of a natural disaster or violent weather event, entire communities can be
                        displaced, destroyed, and in need of help. We’ve seen over the years the effects of massive
                        hurricanes such as Hurricane Harvey in Texas, or Hurricane Michael in Northern Florida, and more
                        recently the violent Tornados tearing through Missouri.</p>
                    <p>When the weather subsides, and the damage is done, reality sets it for those who have suffered
                        through it. Survivors and those effected first hand by these acts of mother nature need help,
                        both near and far. From simple donations such as food and water, to medical and psychological
                        care, and more, we can help rebuild and help others get back to their normal lives in the wake of
                        adversity.</p>
                    <h6>If you want to help your community in the aftermath of a natural disaster, here are some things
                        you can do:</h6>
                    <h6>1. Send Funds or Crucial Supplies  :<Link to='/DonationScreen' style={{
                        color: 'rgb(50 55 39)', 'background-color': 'rgb(255 203 5)'
                    }} ><i class="fas fa-hand-holding-usd"></i>Donations link</Link></h6>
                    Usually the most effective way to help victims of a natural disaster or emergency is to donate to
                    a disaster relief organization. With proper planning and such these organizations can then use
                    the financial stimulus to help their efforts immediately and long term over the coming months
                    and years of rebuilding. If you donate goods be sure that they are needed or part of a list of
                    donatable items. Storing and sorting unnecessary or an overabundance of goods can be very
                    costly and time consuming for relief efforts.
                    <p>2. Volunteer to Help:  <Link disabled to='/' style={{
                        color: 'rgb(50 55 39)', 'background-color': '#4bbf73'
                    }} >(Register as a Member for volunteering in Member Registration Page)</Link></p>
                    When you see the destruction and aftermath of a disaster with your own eyes, you may feel
                    the need to lend a hand to rebuilding efforts. There are many ways you can help volunteer
                    for disaster relief and doing something that you are efficient in is the best way to help your
                    community. For direct help in the most affected areas look into American Red Cross Disaster
                    Training. For other ideas, think about helping communities in ways that deal with shelter,
                    nutrition, and emotional support. Local nonprofits need all the help they can get in these
                    situations and any assistance you can provide can go a long way in the rebuilding process.
                    <h6>3. Donate Blood:  <Link to='/DonationScreen' style={{
                        color: 'rgb(50 55 39)', 'background-color': 'rgb(255 203 5)'
                    }} ><i class="fas fa-hand-holding-usd"></i>Donations link</Link></h6>
                    <p>If you’re eligible and able, giving blood is one of the best ways to help save lives following a
                        disaster. Hospitals have historically shown an increased demand for blood after disasters and
                        due to the short shelf life, they can’t just stock up months ahead of time to alleviate the future
                        demand. Contact the American Red Cross or local relief efforts to see if and where you can
                        donat</p>

                </p>

                <h4 id='FIVE_REASONS' >FIVE REASONS FOR DONATING TO CHARITY</h4>
                <p>



                    Donating to the causes you care about not only benefits the charities themselves, it can be
                    deeply rewarding for you too. Millions of people give to charity on a regular basis to support
                    causes they believe in, as well as for the positive effect it has on their own lives.
                    <h6>1. GIVING TO CHARITY MAKES YOU FEEL GOOD</h6>
                    Donating to charity is a major mood-booster. The knowledge that you’re helping others is hugely
                    empowering and, in turn, can make you feel happier and more fulfilled.
                    <h6>2. GIVING TO CHARITY STRENGTHENS PERSONAL VALUES</h6>
                    Having the power to improve the lives of others is, to many people, a privilege, and one that
                    comes with its own sense of obligation. Acting on these powerful feelings of responsibility is a
                    great way to reinforce our own personal values and feel like we’re living in a way that is true to
                    our own ethical beliefs.
                    <h6>3. GIVING IS MORE IMPACTFUL THAN EVER</h6>
                    Many people are concerned that their donations to charity may be reduced by tax or
                    administrative costs, preventing the full amount from reaching the people or causes they really
                    want to help. Thankfully there are ways to make the most of every donation to charity. There are
                    many other ways to give to charity tax-effectively too, such as by donating straight from your
                    salary before tax is deducted through a payroll giving scheme, donating shares to charity or
                    leaving a charitable legacy in your Will. These methods of giving ensure your chosen charities
                    benefit as much as possible from your support.
                    <h6>4. GIVING TO CHARITY INTRODUCES YOUR CHILDREN TO THE IMPORTANCE OF GENEROSITY</h6>
                    Sharing the experience of donating to charity with your children shows them from a young
                    age that they can make positive changes in the world. Children naturally love to help others, so
                    nurturing their innate generosity is likely to mean that they grow up with a greater appreciation
                    of what they have, and will carry on supporting charity in years to come.
                    Starting a tradition of donating to charity with your children is easy - try creating a family
                    donation box that everyone can add to and nominate a family charity each year, involving thechildren in choosing which causes to support
                    <h6>5. GIVING TO CHARITY ENCOURAGES FRIENDS AND FAMILY TO DO THE SAME</h6>
                    Your own charitable donations can inspire your nearest and dearest to give to causes important
                    to them, and could even bring about a family-wide effort to back a charity or charities that have
                    special significance to you as a group.

                </p>


                <h4 id='MOTO_TO_VOLUNTEER' >MOTO TO VOLUNTEER</h4>
                <p>
                    Many of the reasons that people volunteer and help can be universally applied to volunteers of
                    any background. It's important to remember the basic human motivations for volunteering and
                    helping when you're thinking of retooling your volunteer program because you will want to make
                    sure that you respond to the needs of all of your volunteers and helpers.
                    <h6>Some of the basic reasons for volunteering and helping include:</h6>
                    <li>Helping others.</li>
                    <li>Having an interest in the work or activity.</li>
                    <li>Wanting to learn and gain experience.</li>
                    <li>Having free time available.</li>
                    <li>Being devoted to the cause.</li>
                    <li>Knowing someone else who was involved.</li>
                    <li>Of course, in addition to these basic motivations, people who volunteer find other benefits,including the following ("Matter of Survival: Volunteering," Points of Light Foundation):</li>
                    <li>Acquisition of new skills.</li>
                    <li>Higher self-esteem.</li>
                    <li>New contacts and networks.</li>
                    <li>Possibility for a new job</li>

                </p>




            </div >
        </div >

    )
}

export default MotoOfOurOrganizationScreen

