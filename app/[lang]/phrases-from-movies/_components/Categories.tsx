import React from "react";
import styles from "./Categories.module.css";
import Link from "next/link";
import Image from "next/image";

const Categories: React.FC = () => {
  return (
    <header className={styles.categories}>
      <h2>
        <span>At Workplace / With Colleagues <span className={styles.total}>(95 phrases)</span></span>
        <button className={styles.start}>
            <Image src="/start.svg" alt="Start with a random phrase" width={15} height={15} />
            Start with a random phrase
        </button>
      </h2>
      <div className={styles.movies}>
        <Link href="/phrases-from-movies/the-office-us" className={styles.movie}>
          <Image src="/phrases-from-movies/the-office-us.jpg" alt="The Office (US)" width={2048} height={1356} />
          <div className={styles.details}>
            <h4>The Office (US)</h4>
            <p>Office interactions and professional dynamics.</p>
          </div>
        </Link>

        <Link href="/phrases-from-movies/silicon-valley" className={styles.movie}>
          <Image src="/phrases-from-movies/silicon-valley.jpg" alt="Silicon Valley" width={2560} height={1707} />
          <div className={styles.details}>
            <h4>Silicon Valley</h4>
            <p>Portrays tech startup culture and meetings.</p>
          </div>
        </Link>

        <Link href="/phrases-from-movies/the-wolf-of-wall-street" className={styles.movie}>
          <Image src="/phrases-from-movies/the-wolf-of-wall-street.jpg" alt="The Wolf of Wall Street" width={1000} height={563} />
          <div className={styles.details}>
            <h4>The Wolf of Wall Street</h4>
            <p>Depicts professional and client interactions.</p>
          </div>
        </Link>

        <Link href="/phrases-from-movies/mad-men" className={styles.movie}>
          <Image src="/phrases-from-movies/mad-men.jpg" alt="Mad Men" width={1919} height={1197} />
          <div className={styles.details}>
            <h4>Mad Men</h4>
            <p>Shows client meetings and office dynamics.</p>
          </div>
        </Link>

        <Link href="/phrases-from-movies/horrible-bosses" className={styles.movie}>
          <Image src="/phrases-from-movies/horrible-bosses.jpg" alt="Horrible Bosses" width={2048} height={1365} />
          <div className={styles.details}>
            <h4>Horrible Bosses</h4>
            <p>Illustrates workplace conflicts and humor.</p>
          </div>
        </Link>
      </div>

      <h2>
        <span>At Home / With Friends <span className={styles.total}>(165 phrases)</span></span>
        <button className={styles.start}>
            <Image src="/start.svg" alt="Start with a random phrase" width={15} height={15} />
            Start with a random phrase
        </button>
      </h2>
      <div className={styles.movies}>
        <div className={styles.movie}>
          <Link href="/phrases-from-movies/friends">
            <Image src="/phrases-from-movies/friends.jpg" alt="Friends" width={612} height={380} />
          </Link>
          <div className={styles.details}>
            <h4>Friends</h4>
            <p>Casual conversations and hangouts.</p>
          </div>
        </div>

        <div className={styles.movie}>
          <Link href="/phrases-from-movies/the-big-bang-theory">
            <Image src="/phrases-from-movies/the-big-bang-theory.jpg" alt="The Big Bang Theory" width={3800} height={2280} />
          </Link>
          <div className={styles.details}>
            <h4>The Big Bang Theory</h4>
            <p>Depicts friends interacting in home settings.</p>
          </div>
        </div>

        <div className={styles.movie}>
          <Link href="/phrases-from-movies/home-alone">
            <Image src="/phrases-from-movies/home-alone.jpg" alt="Home Alone" width={1920} height={1080} />
          </Link>
          <div className={styles.details}>
            <h4>Home Alone</h4>
            <p>Family discussions and home life.</p>
          </div>
        </div>

        <div className={styles.movie}>
          <Link href="/phrases-from-movies/the-hangover">
            <Image src="/phrases-from-movies/the-hangover.jpg" alt="The Hangover" width={1500} height={1000} />
          </Link>
          <div className={styles.details}>
            <h4>The Hangover</h4>
            <p>Casual and humorous interactions.</p>
          </div>
        </div>

        <div className={styles.movie}>
          <Link href="/phrases-from-movies/parks-and-recreation">
            <Image src="/phrases-from-movies/parks-and-recreation.jpg" alt="Parks and Recreation" width={862} height={575} />
          </Link>
          <div className={styles.details}>
            <h4>Parks and Recreation</h4>
            <p>Shows home and friend interactions.</p>
          </div>
        </div>
        
        <div className={styles.movie}>
          <Link href="/phrases-from-movies/the-breakfast-club">
            <Image src="/phrases-from-movies/the-breakfast-club.jpg" alt="The Breakfast Club" width={1014} height={757} />
          </Link>
          <div className={styles.details}>
            <h4>The Breakfast Club</h4>
            <p>Teenagers discussing life at home.</p>
          </div>
        </div>
      </div>


      <h2>
        <span>In a Relationship / With Partner <span className={styles.total}>(130 phrases)</span></span>
        <button className={styles.start}>
            <Image src="/start.svg" alt="Start with a random phrase" width={15} height={15} />
            Start with a random phrase
        </button>
      </h2>
      <div className={styles.movies}>
        <div className={styles.movie}>
          <Link href="/phrases-from-movies/la-la-land">
            <Image src="/phrases-from-movies/la-la-land.jpg" alt="La La Land" width={2000} height={1126} />
          </Link>
          <div className={styles.details}>
            <h4>La La Land</h4>
            <p>Romantic conversations and emotional depth.</p>
          </div>
        </div>

        <div className={styles.movie}>
          <Link href="/phrases-from-movies/the-notebook">
            <Image src="/phrases-from-movies/the-notebook.jpg" alt="The Notebook" width={1591} height={1333} />
          </Link>
          <div className={styles.details}>
            <h4>The Notebook</h4>
            <p>Intimate and emotional dialogue.</p>
          </div>
        </div>

        <div className={styles.movie}>
          <Link href="/phrases-from-movies/this-is-us">
            <Image src="/phrases-from-movies/this-is-us.jpg" alt="This Is Us" width={1919} height={1101} />
          </Link>
          <div className={styles.details}>
            <h4>This Is Us</h4>
            <p>Family and romantic interactions.</p>
          </div>
        </div>

        <div className={styles.movie}>
          <Link href="/phrases-from-movies/love">
            <Image src="/phrases-from-movies/love.jpg" alt="This Is Us" width={1296} height={730} />
          </Link>
          <div className={styles.details}>
            <h4>Love</h4>
            <p>Portrays relationship dynamics.</p>
          </div>
        </div>

        <div className={styles.movie}>
          <Link href="/phrases-from-movies/crazy-stupid-love">
            <Image src="/phrases-from-movies/crazy-stupid-love.jpg" alt="Crazy, Stupid, Love." width={3000} height={2000} />
          </Link>
          <div className={styles.details}>
            <h4>Crazy, Stupid, Love.</h4>
            <p>Humorous and heartfelt dialogue.</p>
          </div>
        </div>
        
        <div className={styles.movie}>
          <Link href="/phrases-from-movies/before-sunrise">
            <Image src="/phrases-from-movies/before-sunrise.jpg" alt="Before Sunrise" width={1920} height={1080} />
          </Link>
          <div className={styles.details}>
            <h4>Before Sunrise</h4>
            <p>Deep, intimate conversations.</p>
          </div>
        </div>
      </div>


      <h2>
        <span>In Public / With Strangers <span className={styles.total}>(130 phrases)</span></span>
        <button className={styles.start}>
            <Image src="/start.svg" alt="Start with a random phrase" width={15} height={15} />
            Start with a random phrase
        </button>
      </h2>
      <div className={styles.movies}>
        <div className={styles.movie}>
          <Link href="/phrases-from-movies/coffee-shop">
            <Image src="/phrases-from-movies/coffee-shop.jpg" alt="Coffee Shop" width={620} height={336} />
          </Link>
          <div className={styles.details}>
            <h4>Coffee Shop</h4>
            <p>Interactions in a public setting.</p>
          </div>
        </div>

        <div className={styles.movie}>
          <Link href="/phrases-from-movies/lost-in-translation">
            <Image src="/phrases-from-movies/lost-in-translation.jpg" alt="Lost in Translation" width={1200} height={675} />
          </Link>
          <div className={styles.details}>
            <h4>Lost in Translation</h4>
            <p>Conversations with strangers abroad.</p>
          </div>
        </div>

        <div className={styles.movie}>
          <Link href="/phrases-from-movies/seinfeld">
            <Image src="/phrases-from-movies/seinfeld.jpg" alt="Seinfeld" width={1260} height={710} />
          </Link>
          <div className={styles.details}>
            <h4>Seinfeld</h4>
            <p>Public interactions and humor.</p>
          </div>
        </div>

        <div className={styles.movie}>
          <Link href="/phrases-from-movies/bridesmaids">
            <Image src="/phrases-from-movies/bridesmaids.jpg" alt="Bridesmaids" width={1000} height={561} />
          </Link>
          <div className={styles.details}>
            <h4>Bridesmaids</h4>
            <p>Humorous public scenarios.</p>
          </div>
        </div>

        <div className={styles.movie}>
          <Link href="/phrases-from-movies/curb-your-enthusiasm">
            <Image src="/phrases-from-movies/curb-your-enthusiasm.jpg" alt="Curb Your Enthusiasm" width={1500} height={1000} />
          </Link>
          <div className={styles.details}>
            <h4>Curb Your Enthusiasm</h4>
            <p>Awkward public interactions.</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Categories;
