package onramp.assessment.backend.seed;

import java.util.List;
import java.util.ArrayList;

import onramp.assessment.backend.model.AudioUpload;
import onramp.assessment.backend.repository.AudioRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component; 



@Component
public class Seed implements CommandLineRunner{
    
    @Autowired 
    private AudioRepository repo; 

    @Override 
    public void run(String... args) throws Exception{
        seedData();
    }

    private void seedData() {
        if (repo.count() == 0) {
            
            List<AudioUpload> podlist = new ArrayList<>();

            AudioUpload pod1 = new AudioUpload("Brain Sparks", 
            "This podcast is hosted by usability and UI design expert, Jared Spool. It offers tona of value with many industry leaders sharing insights on usability, UX design, and UI design.",
            "https://uie.fm/assets/album-art/the-uie-podcast.png", 
            "https://www.uie.com/brainsparks/topics/podcasts/", 
            "https://downloads.uie.fm/7/389/asset.uie.com/BSAL/UIEP015_Shipe_Goodwin.mp3",
            "The Tension of Art and Science When Communicating Complex User Research"
            );
            podlist.add(pod1); 
            

            AudioUpload pod2 = new AudioUpload("The Dirt Show", 
            "The Dirt Show is a podcast hosted by the team behind the UX design agency, Fresh Tilled Soil. One cool thing about this podcast is some topics follow a mini-series format, with multiple episodes and different guests talking about the same topic. For example, they have a mini-series on topics such as \"designing your career\" and \"designing the future\".",
            "https://avatars.dicebear.com/api/initials/The_Dirt_Show.svg", 
            "http://www.freshtilledsoil.com/category/podcast/",
            "http://traffic.libsyn.com/thedirt/James_Aylward_-_Final.mp3",
            "Data-Driven Design with James Aylward of Pluralsight"
            );
            podlist.add(pod2);


            AudioUpload pod3 = new AudioUpload("UX Podcast",
            "UX Podcast is for people passionate about balancing business, technology and users within the realm of digital media. Moving the conversation beyond the traditional realm of User Experience.",
            "https://3u9ouc3rh80mit7dp2jeoxqa-wpengine.netdna-ssl.com/wp-content/uploads/2020/12/253-derek-featherstone-uxpodcast-logo-gubben-768x768.jpg",
            "http://uxpodcast.com/",
            "https://content.blubrry.com/uxpodcast/uxpodcast-episode-253-derek-featherstone.mp3",
            "The state of accessibility with Derek Featherstone"
            ); 
            podlist.add(pod3); 

            AudioUpload pod4 = new AudioUpload("UX Pod", 
            "Gerry Gaffney set up the User Experience podcast in 2006, with a view to providing a platform for discussing topics of interest to practitioners or others with an interest in UX.",
            "https://uxpod.com/wp-content/uploads/2020/12/street.jpg",
            "http://uxpod.com/",
            "https://traffic.libsyn.com/uxpod/RoryMadden.mp3", 
            "Running a virtual conference: An interview with Rory Madden\n"
            ); 
            podlist.add(pod4); 

            AudioUpload pod5 = new AudioUpload("UX Mastery",
            "UX Mastery is a website that hosts a lot of useful articles and content related to user experience design. The site also has an infrequently updated podcast.",
            "https://uxmastery.com/wp-content/uploads/2016/03/tom-greever-feature.jpg",
            "http://uxmastery.com/category/podcast/",
            "https://anchor.fm/s/22de0dec/podcast/play/14166520/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fproduction%2F2020-4-23%2F75875188-44100-2-5e28660fb7dbf.mp3",
            "Design Decisions with Tom Greever"
            ); 
            podlist.add(pod5); 

            AudioUpload pod6 = new AudioUpload("UX Discovery Session",
            "A discovery session is an opportunity to learn about a relevant topic, generate ideas that expand a new technique or practice, or brainstorm concepts and ideas for the next new thing.",
            "https://avatars.dicebear.com/api/initials/UX_Discovery_Session.svg",
            "http://uxdiscoverysession.com/",
            "http://traffic.libsyn.com/discoverysession/UXDS071_Di_Dang_New_Technologies_Design_Advocate_at_Google.mp3",
            "Di Dang, New Technologies Design Advocate at Google"
            ); 
            podlist.add(pod6); 

            AudioUpload pod7 = new AudioUpload("React Podcast",
            "Conversations about React with your favorite developers.",
            "https://image.simplecastcdn.com/images/bdb43d4d-bd1d-4fbc-bd60-40f1e3299aa3/20f97d0b-6dab-4005-a995-0ab8fc2cf31c/300x300/1550288890-artwork@2x.jpg",
            "https://reactpodcast.simplecast.com/",
            "https://cdn.simplecast.com/audio/bdb43d4d-bd1d-4fbc-bd60-40f1e3299aa3/episodes/a6363455-0a0e-460f-8074-75f4f5e84775/audio/620d2586-389b-44c7-80ad-25703fd52094/default_tc.mp3",
            "Cassidy Williams on Dreams and Disasters in 2020"
            ); 
            podlist.add(pod7); 

            AudioUpload pod8 = new AudioUpload("Javascript Jabber",
            "Weekly podcast discussion about Javascript on the front and back ends.",
            "https://devchat.tv/wp-content/uploads/2020/06/js_jabber-534x534.jpg",
            "https://devchat.tv/podcasts/js-jabber/",
            "https://media.devchat.tv/js-jabber/JSJ_460_The_Things_Every_JavaScript_Developer_Must_Know_Part_2.mp3",
            "The Things Every JavaScript Developer Must Know, Part 2"
            ); 
            podlist.add(pod8); 

            AudioUpload pod9 = new AudioUpload("JS Party",
            "a weekly celebration of JavaScript and the web",
            "https://cdn.changelog.com/uploads/covers/js-party-original.png",
            "https://changelog.com/jsparty",
            "https://cdn.changelog.com/uploads/jsparty/89/js-party-89.mp3",
            "Modern JS tooling is too complicated. Yep? Nope?"
            ); 
            podlist.add(pod9);

            AudioUpload pod10 = new AudioUpload("The Changelog",
            "Conversations with the hackers, leaders, and innovators of the software world",
            "https://cdn.changelog.com/uploads/covers/the-changelog-original.png?v=63725770322",
            "https://changelog.com/podcast/352",
            "https://cdn.changelog.com/uploads/podcast/352/the-changelog-352.mp3",
            "The Pragmatic Programmers"
            ); 
            podlist.add(pod10); 

            AudioUpload pod11 = new AudioUpload("Developer Tea",
            "A podcast for developers designed to fit inside your tea break",
            "https://spec.fm/static/img/shows/developertea.jpg",
            "https://spec.fm/podcasts/developer-tea/",
            "https://cdn.simplecast.com/audio/c44db111-b60d-436e-ab63-38c7c3402406/episodes/f6c4dfce-4ef7-4746-8f8a-d286d6a0f7c9/audio/88ba9253-4f9b-4a83-9a97-6b9982c31193/default_tc.mp3",
            "Misusing Exceptions in Code and in Life\n"
            ); 
            podlist.add(pod11); 

            AudioUpload pod12 = new AudioUpload("Full Stack Radio",
            "A podcast for developers interested in building great software products.",
            "https://fullstackradio.com/podcast-cover.jpg",
            "https://fullstackradio.com/",
            "https://cdn.transistor.fm/file/transistor/m/shows/13470/2c4a84d725e57fc43b15b1d4b7302ac6.mp3",
            "DHH – Building HEY with Hotwire"
            ); 
            podlist.add(pod12); 

            AudioUpload pod13 = new AudioUpload("Syntax",
            "A Tasty Treats Podcast for Web Developers.",
            "https://syntax.fm/static/logo.png",
            "https://syntax.fm",
            "https://traffic.libsyn.com/syntax/Syntax305.mp3",
            "Writing Good Commit Messages"
            ); 
            podlist.add(pod13); 

            AudioUpload pod14 = new AudioUpload("Coder Radio",
            "A weekly talk show taking a pragmatic look at the art and business of Software Development and the world of technology.",
            "https://assets.fireside.fm/file/fireside-images/podcasts/images/b/b44de5fa-47c1-4e94-bf9e-c72f8d1c8f5d/header.jpg",
            "https://coder.show/",
            "https://aphid.fireside.fm/d/1437767933/b44de5fa-47c1-4e94-bf9e-c72f8d1c8f5d/4d8d2cef-b64a-4464-a777-baa6313a37c9.mp3",
            "SaaS is a Blast"
            ); 
            podlist.add(pod14);

            repo.saveAll(podlist);
        }
        System.out.println("database seeded with sample data...");
    }
}

