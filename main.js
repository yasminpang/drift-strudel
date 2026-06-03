// @title drift
// @by YAZ

await samples({
  vox: ['https://raw.githubusercontent.com/yasminpang/strudel-samples/main/SS_XLLRB_150_vocal_adlib_renegade_panned_chop_main_Amin.wav'],
  vox2: ['https://raw.githubusercontent.com/yasminpang/strudel-samples/main/STCR2_HTE_150_synth_chord_voxy_WET_Am.wav'],
  synth: ['https://raw.githubusercontent.com/yasminpang/strudel-samples/main/STCR2_HTE_150_synth_lead_logical_WET_Am.wav'],
  synth2: ['https://raw.githubusercontent.com/yasminpang/strudel-samples/main/ZEN_PUM_150_lead_synth_joyful_Amin.wav'],
  bass: ['https://raw.githubusercontent.com/yasminpang/strudel-samples/main/STCR2_HTE_150_synth_bass_reese_breathe_again_WET_Am.wav'],
  drums: ['https://raw.githubusercontent.com/yasminpang/strudel-samples/main/AU_HDT_150_kick_industrial.wav'],
  tops: ['https://raw.githubusercontent.com/yasminpang/strudel-samples/main/SS_XLLRB_150_drums_top_intro_renegade.wav'],
  tops2: ['https://raw.githubusercontent.com/yasminpang/strudel-samples/main/STCR2_HTS_150_Toploop_Chitin.wav'],
  arp: ['https://raw.githubusercontent.com/yasminpang/strudel-samples/main/STCR2_HRH_150_Synth_Arp_Control_Amin.wav']
})

const lpfFilter = slider(1257, 1000, 8000) //slide as song progresses to chorus, start at ~1000

setcpm(150/4)

$vox: s("vox")
  .loopAt(8)
  .clip(1)
  .mask("<0 0 1 1 0 0 1 1 0 0 1 1 0 0 1 1 1 1 0>".slow(8))
  .postgain("<0 0 1 1 0 0 1.3 1.3 0 0 1 1 0 0 1 1.3 1.3 1 0>".slow(8))
  .color("#7dd3fc")

$vox2: s("vox2")
  .loopAt(4)
  .clip(1)
  .mask("<0 0 0 0 0 0 0 0 1 1 1 1 1 1 0 1 1 0 0>".slow(8))
  .postgain("<0 0 0 0 0 0 0 0 0.6 0.7 0.7 0.7 1 1 0 1.2 1.2 0 0>".slow(8))
  .color("#7dd3fc")

$synth: s("synth")
  .loopAt(8)
  .clip(1)
  .mask("<1 1 1 1 1 1 1 1 0 0 0 0 1 1 0 1 1 1 0>".slow(8))
  .postgain(1)
  .lpf(lpfFilter)
  .crush(4)
  .color("#7dd3fc")

$synth2: s("synth2")
  .loopAt(8)
  .clip(1)
  .mask("<0 0 0 0 0 1 1 1 1 1 1 1 0 0 0 1 1 0 0>".slow(8))
  .postgain(0.65)
  .crush(4)
  .color("#7dd3fc")

$bass: s("bass")
  .loopAt(4)
  .clip(1)
  .mask("<0 0 0 1 1 1 1 1 1 1 0 0 1 1 0 1 1 0 0>".slow(8))
  .lpf(lpfFilter)
  .postgain(1.05)
  .crush(4)
  .color("#7dd3fc")

$drums: s("drums")
  .loopAt(4)
  .clip(1)
  .mask("<0 0 0 0 1 1 1 1 1 1 0 0 1 1 0 1 1 0 0>".slow(8))
  .postgain(1.6)
  .color("#7dd3fc")

$tops: s("tops")
  .loopAt(8)
  .clip(1)
  .mask("<0 1 1 1 0 0 1 1 0 0 1 1 0 0 0 1 1 0 0>".slow(8))
  .postgain(1.75)
  .color("#7dd3fc")

$tops2: s("tops2")
  .loopAt(8)
  .clip(1)
  .mask("<0 0 0 0 0 0 0 1 1 1 0 0 1 1 0 1 1 0 0>".slow(8))
  .postgain(1.4)
  .color("#7dd3fc")

$arp: s("arp")
  .loopAt(8)
  .clip(1)
  .mask("<0 0 0 0 1 1 1 1 1 1 0 0 1 1 1 1 1 0 0>".slow(8))
  .postgain("<0 0 0 0 0.9 1 1.1 1.1 1.1 1.1 0 0 1.1 1.1 1 1.1 1.1 0 0>".slow(8))
  .color("#7dd3fc")

.punchcard()
