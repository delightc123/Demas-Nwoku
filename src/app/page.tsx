import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroCarousel from '@/components/sections/HeroCarousel';
import VisionSection from '@/components/sections/VisionSection';
import VignetteOverlay from '@/components/ui/VignetteOverlay';

export default function Home() {
  // ============================================
  // MKPUGHE - DEMAS NWOKO EXHIBITION CONTENT
  // From Summary.md - "His Roots, His Heartbeat, His Legacy"
  // ============================================

  const exhibitionSlides = [
    // Slide 1: Hero - MKPUGHE
    {
      id: 'hero-mkpughe',
      type: 'hero',
      heading: 'Mkpughe',
      subheading: 'His Roots, His Heartbeat, His Legacy',
      text: '',
      backgroundImage: '/images/hero-baba.png',
      backgroundColor: '#060608',
    },
    // Slide 2: The Quote
    {
      id: 'the-quote',
      type: 'quote',
      heading: '',
      subheading: '',
      text: '"…if it is not vernacular, what else is there? Vernacular is your mother\'s tongue—that is your nature. So how can you design for your client without understanding his vernacular?" — Baba Demas, December 2023',
      emphasisText: 'This is Baba\'s story. His story of the language called Vernacular— the natural language of design— Baba\'s heartbeat and legacy.',
      backgroundImage: '/images/IMG_0390.png',
      backgroundColor: '#060608',
    },
    // Slide 3: The Story
    {
      id: 'the-story',
      type: 'story',
      heading: 'The Story',
      subheading: '',
      text: 'We remember our quick three-hour session with Baba in Ibadan. We were researching Africanfuturism in Architecture and its impact on the African\'s health and wellness. At the time, there was not much work on this. Baba\'s was one of the authentic few.',
      extendedText: 'For me, it felt like a dream—encountering in person someone we had only read about in our Visual Arts classes.',
      emphasisText: 'Among the many invaluable wisdoms Baba deposited in us during that session, one thing stood out: Baba did not care for labels—African or traditional. He recounted receiving an award abroad, where foreigners asked him what type of architecture he identified with. Was it vernacular? He replied: "If it is not vernacular, what else is there? Vernacular is your mother\'s tongue—that is your nature. So how can you design for your client without understanding his vernacular?"',
      additionalText: 'To Baba, vernacular is the natural language of design. So this mini-hybrid exhibit project takes on the life of Baba\'s vernacular—to visually reinterpret and explore his heartbeat through art. As architects, we took to the paintbrush, the pen, and the mouse to tell Baba\'s story. So, join us for the ride.',
      backgroundImage: '/images/our-picture-collage.jpg',
      backgroundColor: '#1a1a2e',
    },
    // Slide 4: The Journey
    {
      id: 'the-journey',
      type: 'journey',
      heading: 'The Journey',
      subheading: 'We already know Baba\'s history. Check Google if you don\'t. We are not here for that—rather, we are here to tell his story.',
      text: 'We did not begin this work by asking who Demas Nwoko is. We began by listening to what his work has been saying all along. Across buildings, artworks, spaces, and silences, one idea kept returning— quietly, insistently, without explanation:',
      emphasisText: 'Vernacular is the natural language of design.',
      extendedText: 'This project is not merely an archive or a catalogue. It is our journey of encountering that philosophy, sitting with it, and allowing it to shape how we see space, culture, and making. It is our journey of capturing Baba\'s heart, telling his story, and shaping his legacy.',
      backgroundImage: '/images/clouds-bg.png',
      backgroundColor: '#a8c8d8',
    },
    // Slide 5: His Roots Part 1
    {
      id: 'his-roots-1',
      type: 'roots',
      heading: 'His Roots, His Future',
      subheading: 'Baba\'s journey into the vernacular began before the days of the Zaria Art Society.',
      text: 'From the start, Baba sought not to imitate foreign aesthetics, but to root modern art and architecture in the soil of Nigerian life—its materials, rhythms, and cosmology. He saw design not as a borrowed language, but as a living dialect of place.',
      emphasisText: 'In his words and in his practice, vernacular was not a limitation— it was the heartbeat of design itself. It was how culture spoke through space, texture, and form.',
      backgroundImage: '/images/patterns-postcard.png',
      backgroundColor: '#2d1f1a',
      circularFrames: [
        '/images/circular-frames-5-6/frame-5-6-1.jpeg',
        '/images/circular-frames-5-6/frame-5-6-2.jpeg',
        '/images/circular-frames-5-6/frame-5-6-3.jpeg',
      ],
    },
    // Slide 6: His Roots Part 2
    {
      id: 'his-roots-2',
      type: 'roots',
      heading: 'His Roots, His Future',
      subheading: '',
      text: 'So when Temi paints this piece, she tells the story of his beginning— his quest for something beyond colonial interference, his longing to tell the story of his fathers. And so we painted patterns that speak of material honesty, spatial rhythm, and continuity.',
      emphasisText: 'You see how firmly he held onto his roots to shape his future. We dare say: His roots are his future.',
      backgroundImage: '/images/patterns-postcard.png',
      backgroundColor: '#2d1f1a',
      circularFrames: [
        '/images/circular-frames-5-6/frame-5-6-1.jpeg',
        '/images/circular-frames-5-6/frame-5-6-2.jpeg',
        '/images/circular-frames-5-6/frame-5-6-3.jpeg',
      ],
    },
    // Slide 7: His Heartbeat Part 1
    {
      id: 'his-heartbeat-1',
      type: 'heartbeat',
      heading: 'His Heartbeat, His Legacy',
      subheading: '',
      text: 'Vernacular, in Demas Nwoko\'s work, is not nostalgia. It is not tradition preserved behind glass. It is not the past repeated. It is language—a living system through which people, materials, climate, sound, ritual, and belief speak to one another.',
      extendedText: 'A language learned not in classrooms, but through proximity— to land, to craft, to use, to meaning. In his architecture, walls do not merely enclose space; they respond—to heat, to light, to movement, to gathering.',
      emphasisText: 'In his art, form does not decorate; it remembers. In his philosophy, design is not imposed—it emerges. To work vernacularly is not to reject modernity, but to translate it.',
      backgroundImage: '/images/his-face.png',
      backgroundColor: '#1a2d1a',
      circularFrames: [
        '/images/circular-frames-7-8/frame-7-8-1.jpg',
        '/images/circular-frames-7-8/frame-7-8-2.jpeg',
        '/images/circular-frames-7-8/frame-7-8-3.jpeg',
      ],
    },
    // Slide 8: His Heartbeat Part 2
    {
      id: 'his-heartbeat-2',
      type: 'heartbeat',
      heading: 'His Heartbeat, His Legacy',
      subheading: '',
      text: 'And so, in trying to capture his heartbeat, Temi remembers the saying: "The eyes are the window to the soul."',
      emphasisText: 'There was no better way than to trace each line with his words, to lay each color with his fire, and to draw from the permanence of his heart.',
      backgroundImage: '/images/his-face.png',
      backgroundColor: '#1a2d1a',
      circularFrames: [
        '/images/circular-frames-7-8/frame-7-8-1.jpg',
        '/images/circular-frames-7-8/frame-7-8-2.jpeg',
        '/images/circular-frames-7-8/frame-7-8-3.jpeg',
      ],
    },
    // Slide 9: Legacy
    {
      id: 'legacy',
      type: 'legacy',
      heading: '',
      subheading: '',
      text: 'The worth of a man is not valued by how much he got, but by how much he gave— not from the valleys of his hands, but from the depths of his heart.',
      emphasisText: 'That is his real legacy. That is exactly what we captured in this piece— his legacy not merely in achievements, but in the spaces and works that still speak, and in the people he has inspired.',
      extendedText: 'The hearts he has lit with fire— a fire to speak our vernacular, and create what is truly ours.',
      backgroundImage: '/images/clouds-bg.png',
      backgroundColor: '#a8c8d8',
    },
    // Slide 10: The Art Piece Part 1
    {
      id: 'art-piece-1',
      type: 'art',
      heading: 'The Art Piece',
      subheading: '',
      text: 'This piece captures a unique moment in time— a moment of unveiling. John saw Demas Nwoko\'s story as a man emerging from within folds— folds of struggle, sacrifice, resistance, and faith. A man whose heartbeat has always been present, but veiled.',
      emphasisText: 'As Baba celebrates his 90th year, this piece marks a new season: a quiet revolution, a drawing back of what has covered his essence for decades.',
      extendedText: 'With the help of Mr Emmanuel, a visual artist, the man was relief was crafted clay wrapped with folds of fabric, then covered with a thin layer of nylon— another modern twist to his language.',
      backgroundImage: '/images/the-art-piece.jpg',
      backgroundColor: '#383342',
    },
    // Slide 11: The Art Piece Part 2
    {
      id: 'art-piece-2',
      type: 'art',
      heading: 'The Art Piece',
      subheading: '',
      text: 'This piece does not portray Demas Nwoko as a figure. It portrays him as a condition. The bust is covered with rumpled white fabric— folded, tense, stretched.',
      emphasisText: 'This is MKPUGHE — The unveiling of heartbeat. The unveiling of roots. The unveiling of legacy.',
      bulletPoints: [
        'The fabric symbolizes: struggles • sacrifices • roots • resistance • the many layers of his journey',
        'The folds are not neat. They are messy. Unresolved. Human.',
        'From within, the form pushes outward— an image unveiling itself from inside.',
        'The nylon tension, the stretched cloth, speaks of decades of pressure and endurance.',
        'The relief emerges rather than stands apart— suggesting that in vernacular practice, authorship is never detached from place.',
      ],
      backgroundImage: '/images/the-art-piece.jpg',
      backgroundColor: '#383342',
    },
    // Slide 12: Conclusion
    {
      id: 'conclusion',
      type: 'conclusion',
      heading: 'Conclusion',
      subheading: '',
      text: 'This project began as a gift. But it quickly became a question. What does it mean to design when vernacular is treated not as reference, but as spirit? What happens when one\'s roots is not a backdrop, but a collaborator?',
      emphasisText: 'We realized that to tell this story truthfully, we could not speak about Demas Nwoko in the usual way. Instead, we chose to speak through the ideas his work has given us.',
      extendedText: 'The postcards. The low-relief art piece. This digital space. Each is an interpretation— our way of translating philosophy into form.',
      backgroundImage: '/images/silhouette.jpeg',
      backgroundColor: '#060608',
    },
    // Slide 13: Not an Ending
    {
      id: 'not-an-ending',
      type: 'ending',
      heading: 'This Is Not an Ending',
      subheading: '',
      text: 'To say vernacular is the natural language of design is not a romantic claim. It is a practical one. In a time when global design trends move faster than local realities, Demas Nwoko\'s work reminds us that relevance comes from alignment, not speed.',
      extendedText: 'If his work has been recognized beyond Nigeria, it is because it never tried to leave home first.',
      emphasisText: 'This exhibition is not a conclusion. It is an opening. An invitation to see vernacular not as style, but as system. Not as memory, but as method. Not as resistance, but as fluency. The language was always there.',
      backgroundImage: '/images/silhouette.jpeg',
      backgroundColor: '#060608',
    },
  ];

  return (
    <>
      {/* Fixed vignette overlay frame */}
      <VignetteOverlay />

      {/* Minimal centered logo header */}
      <Header
        logo="/images/logo_3d_gold.png"
        logoAlt="The Legacy Initiative"
      />

      <main>
        {/* Hero with Z-axis zoom + Floor stacking sections */}
        <HeroCarousel
          heroTitle="MKPUGHE"
          heroSubtitle="His Roots, His Heartbeat, His Legacy"
          slides={exhibitionSlides}
        />

        {/* Credits Section */}
        <VisionSection
          id="credits"
          tagline="Credits"
          headline="The Legacy Initiative"
          description="This project was conceived and produced by The Legacy Initiative, with the support of Arc Bofu (New Culture Studio). The text and direction explore Demas Nwoko's teaching: vernacular as language."
          credits={[
            { role: 'Project Lead & Chief Scribe', name: 'Divine Chukwubuihem (Founder-Rep, TLI)' },
            { role: 'Artwork (Low-relief)', name: 'John-Africa Elionai & Obikoya Emmanuel' },
            { role: 'Postcards & Illustrations', name: 'Temioluwa Adesina' },
            { role: 'Web Design & Build', name: 'Delight Chukwubuihem' },
            { role: 'Quality Lead', name: 'Callistus Ibeanu & Ohighai Great (RQD, TLI)' },
          ]}
        />
      </main>

      {/* Footer with both logos */}
      <Footer
        brandLogo="/images/logo_3d_gold.png"
        secondaryLogo="/images/logo1.jpeg"
        brandName="MKPUGHE"
        tagline="His Roots, His Heartbeat, His Legacy"
        copyrightNotice="Full copyrights and ownership belong to The Legacy Initiative. Display rights granted to The New Culture Foundation through Arc Anyibofu Ugbodaga."
      />
    </>
  );
}
