import styles from './experience.module.css'
import Image from 'next/image'

export default function Experience(props) {
    return (
    <>
    <section className={"story " + props.type}>
      <div class={"story-img " + props.storyImg}></div>
      <div class={"story-wrapper " + props.storyWrapper}>
        <div class="story-content">
          <p>{props.content}</p>
        </div>
      </div>
      <div class="clearfix"></div>
	  </section>
    </>
    );
};