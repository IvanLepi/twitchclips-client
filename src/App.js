import React from 'react';

import axios from 'axios';

import { Grid } from '@material-ui/core';

import { SearchBar, VideoList, VideoDetail } from './components';

class App extends React.Component {

  state = {
    videos: [
      {
        "id": "AverageSparklyTortoisePeoplesChamp",
        "url": "https://clips.twitch.tv/AverageSparklyTortoisePeoplesChamp",
        "embed_url": "https://clips.twitch.tv/embed?clip=AverageSparklyTortoisePeoplesChamp",
        "broadcaster_id": "61841555",
        "broadcaster_name": "JesseDStreams",
        "creator_id": "29434083",
        "creator_name": "ZennieQT",
        "video_id": "",
        "game_id": "509658",
        "language": "en",
        "title": "The awakening",
        "view_count": 3851052,
        "created_at": "2019-01-27T09:09:24Z",
        "thumbnail_url": "https://clips-media-assets2.twitch.tv/AT-cm%7C387940519-preview-480x272.jpg"
      },
      {
        "id": "BashfulHelpfulSalamanderPrimeMe",
        "url": "https://clips.twitch.tv/BashfulHelpfulSalamanderPrimeMe",
        "embed_url": "https://clips.twitch.tv/embed?clip=BashfulHelpfulSalamanderPrimeMe",
        "broadcaster_id": "29733529",
        "broadcaster_name": "Xbox",
        "creator_id": "40534418",
        "creator_name": "kylooooren",
        "video_id": "436785577",
        "game_id": "66082",
        "language": "en",
        "title": "Breathtaking ",
        "view_count": 2268026,
        "created_at": "2019-06-09T20:25:18Z",
        "thumbnail_url": "https://clips-media-assets2.twitch.tv/AT-cm%7C473231368-preview-480x272.jpg"
      },
      {
        "id": "RepleteEnthusiasticMageCeilingCat",
        "url": "https://clips.twitch.tv/RepleteEnthusiasticMageCeilingCat",
        "embed_url": "https://clips.twitch.tv/embed?clip=RepleteEnthusiasticMageCeilingCat",
        "broadcaster_id": "60917582",
        "broadcaster_name": "s1mple",
        "creator_id": "158637594",
        "creator_name": "SaKePS",
        "video_id": "",
        "game_id": "32399",
        "language": "en",
        "title": "s1mple FPL 1v5",
        "view_count": 2208165,
        "created_at": "2018-12-20T16:39:31Z",
        "thumbnail_url": "https://clips-media-assets2.twitch.tv/AT-cm%7C363518567-preview-480x272.jpg"
      },
      {
        "id": "GorgeousFunnyNeanderthalBIRB",
        "url": "https://clips.twitch.tv/GorgeousFunnyNeanderthalBIRB",
        "embed_url": "https://clips.twitch.tv/embed?clip=GorgeousFunnyNeanderthalBIRB",
        "broadcaster_id": "213016005",
        "broadcaster_name": "washingtonpost",
        "creator_id": "42768383",
        "creator_name": "tacotree",
        "video_id": "",
        "game_id": "417752",
        "language": "en",
        "title": "Blowup Tuesday",
        "view_count": 2096831,
        "created_at": "2018-04-10T19:59:16Z",
        "thumbnail_url": "https://clips-media-assets2.twitch.tv/222842783-preview-480x272.jpg"
      },
      {
        "id": "VainEnticingOtterPMSTwin",
        "url": "https://clips.twitch.tv/VainEnticingOtterPMSTwin",
        "embed_url": "https://clips.twitch.tv/embed?clip=VainEnticingOtterPMSTwin",
        "broadcaster_id": "42796224",
        "broadcaster_name": "AlfonoflA",
        "creator_id": "144663346",
        "creator_name": "kawazou",
        "video_id": "",
        "game_id": "18122",
        "language": "es",
        "title": "WF Hivemind",
        "view_count": 2070913,
        "created_at": "2018-12-16T02:05:11Z",
        "thumbnail_url": "https://clips-media-assets2.twitch.tv/31695046192-offset-1348-preview-480x272.jpg"
      },
      {
        "id": "ScaryRelentlessVelociraptorBabyRage",
        "url": "https://clips.twitch.tv/ScaryRelentlessVelociraptorBabyRage",
        "embed_url": "https://clips.twitch.tv/embed?clip=ScaryRelentlessVelociraptorBabyRage",
        "broadcaster_id": "237291537",
        "broadcaster_name": "GiannieLee",
        "creator_id": "54073571",
        "creator_name": "EG0KIND",
        "video_id": "",
        "game_id": "509658",
        "language": "ko",
        "title": "WeirdChamp",
        "view_count": 1966448,
        "created_at": "2019-04-18T19:53:11Z",
        "thumbnail_url": "https://clips-media-assets2.twitch.tv/AT-cm%7C440779127-preview-480x272.jpg"
      },
      {
        "id": "BrightOriginalMosquitoPermaSmug",
        "url": "https://clips.twitch.tv/BrightOriginalMosquitoPermaSmug",
        "embed_url": "https://clips.twitch.tv/embed?clip=BrightOriginalMosquitoPermaSmug",
        "broadcaster_id": "217377982",
        "broadcaster_name": "Sweet_Anita",
        "creator_id": "97624228",
        "creator_name": "tparker1629",
        "video_id": "",
        "game_id": "509658",
        "language": "en-gb",
        "title": "Other Games",
        "view_count": 1965572,
        "created_at": "2018-10-18T23:55:02Z",
        "thumbnail_url": "https://clips-media-assets2.twitch.tv/AT-cm%7C328132611-preview-480x272.jpg"
      },
      {
        "id": "SleepyGracefulChickpeaDBstyle",
        "url": "https://clips.twitch.tv/SleepyGracefulChickpeaDBstyle",
        "embed_url": "https://clips.twitch.tv/embed?clip=SleepyGracefulChickpeaDBstyle",
        "broadcaster_id": "7601562",
        "broadcaster_name": "Chess",
        "creator_id": "42334002",
        "creator_name": "Toosks",
        "video_id": "646080904",
        "game_id": "743",
        "language": "en-gb",
        "title": "xQc literally lost the first  minute ",
        "view_count": 1926107,
        "created_at": "2020-06-09T21:03:15Z",
        "thumbnail_url": "https://clips-media-assets2.twitch.tv/38577601712-offset-4944-preview-480x272.jpg"
      },
      {
        "id": "TrustworthyBreakableJuiceCorgiDerp",
        "url": "https://clips.twitch.tv/TrustworthyBreakableJuiceCorgiDerp",
        "embed_url": "https://clips.twitch.tv/embed?clip=TrustworthyBreakableJuiceCorgiDerp",
        "broadcaster_id": "110690086",
        "broadcaster_name": "Myth",
        "creator_id": "99256167",
        "creator_name": "M0oosik",
        "video_id": "",
        "game_id": "33214",
        "language": "en",
        "title": "Solving food problems",
        "view_count": 1861026,
        "created_at": "2018-03-26T17:20:15Z",
        "thumbnail_url": "https://clips-media-assets2.twitch.tv/214578507-preview-480x272.jpg"
      },
      {
        "id": "BlightedObliqueSrirachaJebaited",
        "url": "https://clips.twitch.tv/BlightedObliqueSrirachaJebaited",
        "embed_url": "https://clips.twitch.tv/embed?clip=BlightedObliqueSrirachaJebaited",
        "broadcaster_id": "87384569",
        "broadcaster_name": "pogonias_",
        "creator_id": "87384569",
        "creator_name": "pogonias_",
        "video_id": "",
        "game_id": "18122",
        "language": "fr",
        "title": "Ez yellow monocle ",
        "view_count": 1809277,
        "created_at": "2018-12-14T14:51:20Z",
        "thumbnail_url": "https://clips-media-assets2.twitch.tv/vod-348925802-offset-3084-preview-480x272.jpg"
      },
      {
        "id": "ShortIntelligentKeyboardBleedPurple",
        "url": "https://clips.twitch.tv/ShortIntelligentKeyboardBleedPurple",
        "embed_url": "https://clips.twitch.tv/embed?clip=ShortIntelligentKeyboardBleedPurple",
        "broadcaster_id": "49207184",
        "broadcaster_name": "fps_shaka",
        "creator_id": "195067388",
        "creator_name": "Riki156",
        "video_id": "",
        "game_id": "511224",
        "language": "ja",
        "title": "倒れる釈迦",
        "view_count": 1775451,
        "created_at": "2020-06-07T13:43:24Z",
        "thumbnail_url": "https://clips-media-assets2.twitch.tv/38531773792-offset-12820-preview-480x272.jpg"
      },
      {
        "id": "PoliteCorrectHorseradishPeteZarollTie",
        "url": "https://clips.twitch.tv/PoliteCorrectHorseradishPeteZarollTie",
        "embed_url": "https://clips.twitch.tv/embed?clip=PoliteCorrectHorseradishPeteZarollTie",
        "broadcaster_id": "7835731",
        "broadcaster_name": "itsNeryssa",
        "creator_id": "7835731",
        "creator_name": "itsNeryssa",
        "video_id": "",
        "game_id": "18122",
        "language": "en",
        "title": "Skyreach - Green Monocle Solve",
        "view_count": 1762637,
        "created_at": "2018-12-14T23:09:49Z",
        "thumbnail_url": "https://clips-media-assets2.twitch.tv/AT-cm%7C360379665-preview-480x272.jpg"
      },
      {
        "id": "ImpossibleLovelyChimpanzeePraiseIt",
        "url": "https://clips.twitch.tv/ImpossibleLovelyChimpanzeePraiseIt",
        "embed_url": "https://clips.twitch.tv/embed?clip=ImpossibleLovelyChimpanzeePraiseIt",
        "broadcaster_id": "7835731",
        "broadcaster_name": "itsNeryssa",
        "creator_id": "7835731",
        "creator_name": "itsNeryssa",
        "video_id": "",
        "game_id": "18122",
        "language": "en",
        "title": "Dark Iron Dwarf Mole Machine - Teleport to Ironforge",
        "view_count": 1736219,
        "created_at": "2018-06-20T00:10:43Z",
        "thumbnail_url": "https://clips-media-assets2.twitch.tv/AT-cm%7C259048763-preview-480x272.jpg"
      },
      {
        "id": "BeautifulTentativeRhinocerosANELE",
        "url": "https://clips.twitch.tv/BeautifulTentativeRhinocerosANELE",
        "embed_url": "https://clips.twitch.tv/embed?clip=BeautifulTentativeRhinocerosANELE",
        "broadcaster_id": "25978600",
        "broadcaster_name": "cslesportsgg3",
        "creator_id": "25139393",
        "creator_name": "Cookies11",
        "video_id": "",
        "game_id": "21779",
        "language": "en",
        "title": "Legends",
        "view_count": 1731244,
        "created_at": "2019-04-28T19:39:58Z",
        "thumbnail_url": "https://clips-media-assets2.twitch.tv/AT-cm%7C446951511-preview-480x272.jpg"
      },
      {
        "id": "WiseDreamyNightingaleTakeNRG",
        "url": "https://clips.twitch.tv/WiseDreamyNightingaleTakeNRG",
        "embed_url": "https://clips.twitch.tv/embed?clip=WiseDreamyNightingaleTakeNRG",
        "broadcaster_id": "7835731",
        "broadcaster_name": "itsNeryssa",
        "creator_id": "7835731",
        "creator_name": "itsNeryssa",
        "video_id": "",
        "game_id": "18122",
        "language": "en",
        "title": "Dark Iron Dwarf Mole Machine - Teleport to Stormwind",
        "view_count": 1725184,
        "created_at": "2018-06-20T00:15:43Z",
        "thumbnail_url": "https://clips-media-assets2.twitch.tv/AT-cm%7C259050646-preview-480x272.jpg"
      },
      {
        "id": "CalmImpartialThymeOptimizePrime",
        "url": "https://clips.twitch.tv/CalmImpartialThymeOptimizePrime",
        "embed_url": "https://clips.twitch.tv/embed?clip=CalmImpartialThymeOptimizePrime",
        "broadcaster_id": "81547955",
        "broadcaster_name": "fakenOFFICIAL",
        "creator_id": "29731790",
        "creator_name": "Scruul",
        "video_id": "",
        "game_id": "32399",
        "language": "sv",
        "title": "Kristoffer \"faken\" Andersson cheating, look at the glasses",
        "view_count": 1612230,
        "created_at": "2019-03-23T02:14:08Z",
        "thumbnail_url": "https://clips-media-assets2.twitch.tv/AT-cm%7C423665449-preview-480x272.jpg"
      },
      {
        "id": "ObliviousObservantDunlinRalpherZ",
        "url": "https://clips.twitch.tv/ObliviousObservantDunlinRalpherZ",
        "embed_url": "https://clips.twitch.tv/embed?clip=ObliviousObservantDunlinRalpherZ",
        "broadcaster_id": "174267851",
        "broadcaster_name": "SilvaNo4ka",
        "creator_id": "415396165",
        "creator_name": "GutS22Leon",
        "video_id": "",
        "game_id": "509658",
        "language": "ru",
        "title": "696969",
        "view_count": 1522406,
        "created_at": "2020-12-10T03:13:11Z",
        "thumbnail_url": "https://clips-media-assets2.twitch.tv/AT-cm%7C962031684-preview-480x272.jpg"
      },
      {
        "id": "DignifiedColdbloodedDragonDoggo",
        "url": "https://clips.twitch.tv/DignifiedColdbloodedDragonDoggo",
        "embed_url": "https://clips.twitch.tv/embed?clip=DignifiedColdbloodedDragonDoggo",
        "broadcaster_id": "75425569",
        "broadcaster_name": "edisonparklive",
        "creator_id": "37112895",
        "creator_name": "rwonron",
        "video_id": "",
        "game_id": "509658",
        "language": "en",
        "title": "FINALLYYY",
        "view_count": 1453002,
        "created_at": "2019-04-07T18:30:46Z",
        "thumbnail_url": "https://clips-media-assets2.twitch.tv/AT-cm%7C433781730-preview-480x272.jpg"
      },
      {
        "id": "TiredImpossibleEmuLitFam",
        "url": "https://clips.twitch.tv/TiredImpossibleEmuLitFam",
        "embed_url": "https://clips.twitch.tv/embed?clip=TiredImpossibleEmuLitFam",
        "broadcaster_id": "7835731",
        "broadcaster_name": "itsNeryssa",
        "creator_id": "7835731",
        "creator_name": "itsNeryssa",
        "video_id": "",
        "game_id": "18122",
        "language": "en",
        "title": "The Eternal Palace Entrance \"Cutscene\"",
        "view_count": 1383758,
        "created_at": "2019-07-08T02:28:24Z",
        "thumbnail_url": "https://clips-media-assets2.twitch.tv/AT-cm%7C490790393-preview-480x272.jpg"
      },
      {
        "id": "FilthySuccessfulManateeRuleFive",
        "url": "https://clips.twitch.tv/FilthySuccessfulManateeRuleFive",
        "embed_url": "https://clips.twitch.tv/embed?clip=FilthySuccessfulManateeRuleFive",
        "broadcaster_id": "37516578",
        "broadcaster_name": "Warcraft",
        "creator_id": "270680777",
        "creator_name": "osiris_183",
        "video_id": "286658051",
        "game_id": "18122",
        "language": "en",
        "title": "Level Squish",
        "view_count": 1265917,
        "created_at": "2019-06-14T04:05:47Z",
        "thumbnail_url": "https://clips-media-assets2.twitch.tv/AT-cm%7C476099602-preview-480x272.jpg"
      }
    ],
    selectedVideo: {
      "id": "BrightOriginalMosquitoPermaSmug",
      "url": "https://clips.twitch.tv/BrightOriginalMosquitoPermaSmug",
      "embed_url": "https://clips.twitch.tv/embed?clip=BrightOriginalMosquitoPermaSmug",
      "broadcaster_id": "217377982",
      "broadcaster_name": "Sweet_Anita",
      "creator_id": "97624228",
      "creator_name": "tparker1629",
      "video_id": "",
      "game_id": "509658",
      "language": "en-gb",
      "title": "Other Games",
      "view_count": 1965572,
      "created_at": "2018-10-18T23:55:02Z",
      "thumbnail_url": "https://clips-media-assets2.twitch.tv/AT-cm%7C328132611-preview-480x272.jpg"
    }
  }

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video});
    window.scrollTo(0, 0);
  }

  handleSubmit = async (broadcaster_id) => {
    const response = await axios.get('http://localhost:8080/clips?broadcaster_id=' + broadcaster_id);

    console.log(response);
    this.setState({videos: response.data.data, selectedVideo: response.data.data[0]});
  }

  

  render (){
    const {selectedVideo, videos} = this.state;

    return (
      <Grid justify='center' container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit}/>
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo} fetchClips={this.handleSubmit}/>
            </Grid>
            <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default App;