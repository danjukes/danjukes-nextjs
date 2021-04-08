import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Header from '../components/header'
import About from '../components/about'
import Experience from '../components/experience'

export default function about() {
  return (
    <Layout>
    <Head>
      <title>About page</title>
      <link href="https://fonts.googleapis.com/css2?family=Damion&amp;display=swap" rel="stylesheet"></link>
      <link href="/css/styles.css" rel="stylesheet"></link>
    </Head>
    <Header
      title="Dan Jukes"
      subtitle="Product design &amp; UX leadership">  
    </Header>
    <About
      img="/images/avatar.jpg"
      paragraph1={[<strong>Hello, I´m Dan</strong>, ". A Product design lead & UX manager at ", <span className='g'>G</span>, <span class='o'>o</span>, <span class='o2'>o</span>, <span class='g'>g</span>, <span class='l'>l</span>, <span class='e'>e</span>, " ", <del>&amp; <span class='y'>YouTube</span></del>, ", leading the design of applications with smart interactions and user experience (UX) in mind."]}
      paragraph2={["Originally from Cardiff, I can now be found ",<del>across the pond in sunny California</del>,", working at Google",<del>´s HQ in Mountain View&#44; London&#44;</del>," Zurich."]}>
    </About>
    <Experience
      type="travel"
      storyImg="right"
      storyWrapper="left"
      content="I´m currently a UX Design Lead &amp; Manager on the Google Travel team.">
    </Experience>
    <Experience
      type="google"
      storyImg="left"
      storyWrapper="right"
      content="Whilst at Google &amp; YouTube I have also lead design on a range of different projects improving their user experience (UX).">
    </Experience>
    <Experience
      type="patents"
      storyImg="right"
      storyWrapper="left"
      content="I have invented design patterns for complex interaction.">
    </Experience>
    <Experience
      type="mbd"
      storyImg="left"
      storyWrapper="right"
      content="Prior to Google I worked at Mark Boulton Design a renowned design agency and small publisher Five Simple steps.">
    </Experience>
    <Experience
      type="snowforecast"
      storyImg="right"
      storyWrapper="left"
      content="I designed and developed a snow forecast iPhone app which was #1 in its category in the app store.">
    </Experience>
    <Experience
      type="dotnet"
      storyImg="left"
      storyWrapper="right"
      content="I have contributed to .net magazine participating in the design off.">
    </Experience>
    <Experience
      type="outside"
      storyImg="right"
      storyWrapper="left"
      content="Outside of design and tech, I enjoy spending my time as a husband, dad, traveller, keen Spurs fan and general Ski nut! :)">
    </Experience>
  </Layout>
  )
}