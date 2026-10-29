import type { Chapter } from "../types";

/**
 * 英文版六章內容 — 編輯翻譯自繁中版 chapters.ts（逐字轉錄自策劃稿 E1–E6）。
 * 章名為編輯英譯（titleZh 保留原始中文章名供對等驗證）；章序與識別碼不變。
 * 原書書名《》與原篇名〈〉保留原文，旁附編輯英譯；非官方授權譯名。
 * 每章九欄齊全：章名、核心句、教導說明、與日常生活的關係、生活例子、
 * 一個小行動（摘要＋步驟）、常見誤解、深入原書脈絡、來源與編輯追溯。
 */

export const CHAPTERS: Chapter[] = [
  {
    id: "chapter-1",
    order: 1,
    number: "1",
    shortTitle: "The Divine Gene",
    title: "The Divine Gene: Begin by Noticing Your Own Reactions",
    titleZh: "神性基因：從看見自己的反應開始",
    core: "In the author’s view, human beings interact with the Origin through the “divine gene”; the understanding, thoughts, and intentions of daily life are this spiritual perspective’s entry point into practice.",
    alwaysVisibleNote: {
      label: "Reading note",
      text: "In the original books this concept carries both spiritual and biological meaning; it is not merely a metaphor for habits. Statements about DNA, healing, and longevity are not presented on this site as scientific fact or as guarantees of results; nor is anyone’s practice judged by illness or by life circumstances.",
      kind: "boundary",
    },
    teaching: {
      kind: "plain",
      paragraphs: [
        {
          text: "In 《要開悟讀這本書就夠了》 (If You Want Enlightenment, This Book Is Enough), the “Origin” is the creative source of life, and the “divine gene” is, in the author’s account, a support mechanism for growth that the Origin has given each person. The author connects it with DNA, with memories carried over from past lives, with talents, with karma, and with spiritual growth. Within the books it carries a genuine spiritual and biological meaning — it is not simply another name for “good habits”.",
        },
        {
          text: "The author’s explanation begins with a person’s path of growth: family upbringing, school, faith, work, and relationships gradually shape one’s character and one’s way of understanding the world. When the same thing reaches a person, it is judged through that person’s own “perceptions and beliefs”, which then form thoughts, words, and behavior. The author further holds that these reactions activate or match the divine gene, influencing destiny and spiritual development.",
        },
        {
          text: "You can observe the first half of this in your own life: What did I hear? How did I interpret it? What am I about to do? The second half — the interplay of genes, karma, and destiny — remains the author’s spiritual and biological claim. This site does not treat it as a scientific mechanism verified by the present source review.",
        },
      ],
    },
    dailyLife: {
      kind: "editorial",
      paragraphs: [
        {
          text: "A message left unanswered can be read as “he looks down on me”, yet it may simply be missing information. Seeing your own interpretation opens room to ask, to wait, or to state what you need. This observation does not require you to first accept every metaphysical claim, nor does it mean you can control the other person or every outcome.",
        },
      ],
    },
    example: {
      kind: "editorial",
      paragraphs: [
        {
          text: "A colleague has not replied about the handover documents. You are angry and about to reproach them in the group chat. First you distinguish: the established fact is “the documents have not arrived”; “he is deliberately holding me back” is your current interpretation. You can ask clearly about progress and difficulties, state the deadline, and then decide whether coordination is needed. The reply may still fall short of what you hoped, but how you expressed yourself and handled the matter has already changed.",
        },
      ],
    },
    action: {
      summary:
        "Today, catch one reaction and write down “what happened, my interpretation, my next choice”.",
      steps: "Pick one small incident; separate what can be confirmed from your own speculation; think of a more honest, less hurtful response — and actually carry it out. When you review it, record what you said and what you did; do not grade yourself on “how activated your divine gene is”. This three-column exercise is an observation tool proposed by the editors, not a gene practice taught in the original books.",
      kind: "editorial",
    },
    misunderstandings: {
      kind: "boundary",
      items: [
        {
          question: "So the divine gene is just a psychological metaphor?",
          answer:
            "No. The original books explicitly connect it with the Origin, DNA, past lives, and ascension. This site preserves that context, and separately offers observable actions.",
        },
        {
          question: "Does a change of mind prevent illness, cure disease, or guarantee longevity?",
          answer:
            "The original books contain statements of this kind, but this project has not established any scientific basis for them. The website makes no promise of healing or of life outcomes, and does not present the exercises as a substitute for medical care.",
        },
        {
          question: "Does illness, encountering violence, or adversity mean someone’s practice is poor?",
          answer:
            "This site makes no such judgment. A person’s circumstances cannot be used to infer their morality, inner state, or spiritual attainment — still less to demand that they endure harm.",
        },
        {
          question: "Does being positive mean you may not feel sad or angry?",
          answer:
            "Observing your reactions does not deny your feelings; Chapters 5 and 6 discuss expression, responsibility, and boundaries.",
        },
      ],
    },
    deeper: {
      kind: "plain",
      paragraphs: [
        {
          text: "Part One links what the author calls the 97.5% unactivated portion to the “divine gene”; Part Two explains that perceptions and beliefs work as filters; Part Three connects this to interaction with the Origin, to restoring the “light cocoon” state, and to ascension. These percentages and the division of labor within DNA should all be labeled as the author’s model, not drawn as a scientifically confirmed map of human anatomy.",
        },
        {
          text: "The original books do not merely say “look on the bright side”: they call for sincere, ethical, altruistic responses in living, and Part Three notes that anyone, regardless of status or wealth, can begin with how they treat the people around them. The author holds that positive and negative reactions set in motion different alignments of the divine gene and different karmic results; this is his claim of spiritual cause and effect, and it cannot be used to rule on any reader’s circumstances. 〈神性基因的匹配〉 (The Matching of the Divine Gene) then connects outside information, inner cognition, and choices with the author’s proposed DNA-alignment relationship.",
        },
        {
          text: "A limit to keep: the original books also contain strong inferences about healing, avoiding misfortune, and judging one’s inner state by illness. The website may honestly report that the author makes such claims; it must not turn them into promises or reproaches aimed at readers.",
          kind: "boundary",
        },
      ],
    },
    sourceIds: ["S01", "S02", "S03", "S04"],
    traceability:
      "Primary sources S01–S03: 《要開悟讀這本書就夠了》, 〈世界七大哉問─神性基因〉 (The Seven Great Questions: The Divine Gene), Parts One to Three, book pp. 169–187 / PDF 85–94. Growth and beliefs: book pp. 171–177 / PDF 86–89; inferences about health and destiny: book pp. 178–186 / PDF 90–94; practice in relationships: book pp. 185–187 / PDF 93–94. Supplementary S04: 〈神性基因的匹配〉 (The Matching of the Divine Gene), book pp. 316–320 / PDF 159–161. The teaching explanation and the deeper context are plain-language restatements of claims from the original books; the daily-life connection, the example, and the small action are editorial explanations or newly written examples; the common misunderstandings include the website’s explicitly stated boundaries.",
  },
  {
    id: "chapter-2",
    order: 2,
    number: "2",
    shortTitle: "Three Practice Actions",
    title: "Three Actions of Practice in Daily Life",
    titleZh: "日常生活中的三個修行作為",
    core: "The author takes work and daily life as the main axis, joined by reading and reflection and by daily sitting meditation, and states plainly that none of the three elements can be omitted.",
    practices: {
      items: [
        "Make work and daily life the main axis.",
        "Read relevant books as a support.",
        "Sit for meditation every day (40 to 90 minutes).",
      ],
    },
    teaching: {
      kind: "plain",
      paragraphs: [
        {
          text: "This piece describes the author’s own way of spiritual growth. He describes the goal as the communion of body, mind, and spirit, and as the realization of oneness with the Creator; practice is not equated with leaving daily life behind, and neither supernatural powers nor continuous ecstasy is the point.",
        },
        {
          lead: "Work and daily life as the main axis.",
          text: "In the author’s view, having come into this world, one is to actually take part in its various roles and experiences — while also learning to watch and reflect on one’s own performance, being at once a participant in events and a member of the audience. Work, study, caregiving, and life together are the places where choices are made real; the “audience” metaphor does not mean one may set down one’s responsibilities.",
        },
        {
          lead: "Reading relevant books as a support.",
          text: "The original text asks for daily or frequent reading, together with repeated reflection. The author holds that words, reading, and study can be transformed into energy of consciousness; in practical terms, reading can be used to mirror your own understanding, which you then carry back into daily life to check. Where something is not yet understood, the original text allows setting it aside for the time being — there is no need to pretend to understand. This site has not created a required-reading list on the basis of this passage.",
        },
        {
          lead: "Sitting meditation every day.",
          text: "The author asks that, alongside work and daily life, one set aside 40–90 minutes each day, entering “purity” and “reverence” through “stillness”. With the image of muddy water settling, he describes drawing near, in quiet, to the true self, to the consciousness of the heart, and to the connection with the Origin. This carries more spiritual meaning than ordinary relaxation, or than the goal of working more efficiently.",
        },
      ],
    },
    dailyLife: {
      kind: "editorial",
      paragraphs: [
        {
          text: "Daily life supplies the people and matters one truly has to face; reading supplies material for renewed understanding; and, in the author’s account, sitting meditation lets the turbid settle and brings one closer to what is inward. All three then return to daily life, where they confirm one another. This cycle is the editors’ arrangement of the piece; “none of the three elements can be omitted” is the author’s own explicit requirement, and it cannot be rewritten to mean that choosing any one item equals his complete method.",
        },
      ],
    },
    example: {
      kind: "editorial",
      paragraphs: [
        {
          text: "An office worker who helps care for family notices that they are always rushing to decide on the family’s behalf. They treat the day’s conversation about dividing tasks as their field of practice; while reading, they pick out a passage that speaks to this difficulty and note what they still do not understand; practicing by the author’s method, they then schedule the 40–90 minutes of sitting meditation into the day, and return to daily life to examine their own way of being with others. This is an example of organizing the three — not a procedure that guarantees any particular inner experience.",
        },
      ],
    },
    action: {
      summary:
        "For tomorrow, identify one everyday responsibility to carry out well, one passage to genuinely understand, and a schedulable slot for the original books’ 40–90 minutes of sitting meditation.",
      overviewQualifier:
        "This small action is planning only; it is not the completion of the author’s whole practice.",
      steps: "Write these three items down first; if the third cannot currently be scheduled, record that limitation honestly. Completing one round of planning does not mean completing the whole practice described in the original books. This site offers no shortened sitting meditation and no substitute technique, and does not imply that shortening the duration yields the same result.",
      kind: "editorial",
    },
    misunderstandings: {
      kind: "boundary",
      items: [
        {
          question: "Is reading alone, or meditation alone, enough?",
          answer:
            "In this piece the author explicitly says that all three are needed; on this website, reading and meditation cannot replace practice in daily life.",
        },
        {
          question: "If work is the main axis, does that mean constant overtime?",
          answer:
            "What the original text stresses is participation in life; the chapter on vocation in 《要開悟讀這本書就夠了》 also requires staying within the law and doing no harm to others. This website does not treat overwork, or abandoning one’s caregiving responsibilities, as practice.",
        },
        {
          question: "Can this site teach the original books’ procedures for breathing, posture, and visualization?",
          answer:
            "The designated passages do not provide complete steps for these, so none are invented here. The original text mentions certain kinds of music to accompany practice, but that is not a technique added by this site.",
        },
        {
          question: "Will following this certainly lead to enlightenment?",
          answer:
            "The assurance at the end of the book is the author’s statement; this site does not convert it into a service guarantee. No purchase, qualification, or course is required to use this site.",
        },
      ],
    },
    deeper: {
      kind: "plain",
      paragraphs: [
        {
          text: "The piece begins on book page 55 and ends on page 60; it is not only the list on page 57. The surrounding 〈悟了之後〉 (After Enlightenment) series discusses life roles, the meaning of life, and the author’s personal realizations. The author describes the true self of sitting meditation as a consciousness of the heart that comes from the Origin and is imperishable; this website must not rewrite that as mere attention training.",
        },
        {
          text: "On page 59 the original book lists religious, classical, yoga, natural-sound, and spiritual music, and advises avoiding pop music; that is the author’s arrangement, not this site’s verification of any therapeutic effect of music. In addition, 〈生活裡覺醒的第一步／第二步／第三步〉 (The First, Second, and Third Steps of Awakening in Daily Life) are a different group of pieces in 《靈性覺醒》 (Spiritual Awakening) — not other names for this chapter’s three actions.",
        },
      ],
      quote: {
        text: "These three elements cannot be missing one; they are the main content of my practice.",
        attribution: "《靈性覺醒》 (Spiritual Awakening), book / PDF p. 58",
      },
    },
    sourceIds: ["S05", "S06", "S08", "S20"],
    traceability:
      "Primary source S05: 《靈性覺醒》, 〈悟了之後（續上篇三）〉 (After Enlightenment, Continued Part 3; Qingqi’s Notes on Awakening No. 6), book / PDF pp. 55–60; the list at 57, the indispensability of the three together with daily life and reading at 58, sitting meditation at 58–59, continued practice and the author’s assurance at 60. Context S06: the same series, Notes No. 4 through 7, book / PDF pp. 47–67. Supplementary S08: 《要開悟讀這本書就夠了》, 〈靈性成長的職業選擇〉 (Career Choices for Spiritual Growth), book pp. 262–264 / PDF 132–133; S20: 《靈性覺醒》, 〈千里之行，始於足下〉 (A Journey of a Thousand Miles Begins Beneath One’s Feet), book / PDF p. 228. The necessity, order, and duration of the three are claims from the original books; the cycle diagram idea, the scheduling, and the everyday example are editorial arrangements.",
  },
  {
    id: "chapter-3",
    order: 3,
    number: "3",
    shortTitle: "Look at Your Motive",
    title: "Before You Act, Look at Your Motive",
    titleZh: "做事之前，先看自己的動機",
    core: "The author repeatedly reminds us: the same deed, done for different reasons, carries different meaning for spiritual growth.",
    teaching: {
      kind: "plain",
      paragraphs: [
        {
          text: "《要開悟讀這本書就夠了》 (If You Want Enlightenment, This Book Is Enough) places “motive and purpose” in a position of the greatest importance. The book uses work as its example: similar labor may be done merely for pay, or may be done with a sense of being of use to others. 〈角色〉 (Roles) in 《靈性覺醒》 in turn lists motive, benefiting others, wholehearted effort, and the bearing of responsibility among the things examined within one’s life roles.",
        },
        {
          text: "In plain language: alongside asking “what am I going to do”, also ask “what do I hope to satisfy, to bring about”. But examining one’s good intentions cannot become a claim of exemption; the chapter on vocation in 《要開悟讀這本書就夠了》 also explicitly lists doing no harm to others. The exercises on this site therefore check motive and likely impact together.",
        },
      ],
    },
    dailyLife: {
      kind: "editorial",
      paragraphs: [
        {
          text: "Offering an opinion, helping, refusing, or reaching for an opportunity can all be mixed with motives — wanting praise, fearing loss, genuinely caring. Admitting that the heart is mixed does more to correct what you do next than hastily declaring yourself completely selfless. This is an editorially prepared entry point for practice, not an instrument for measuring anyone’s purity.",
        },
      ],
    },
    example: {
      kind: "editorial",
      paragraphs: [
        {
          text: "You want to point out a colleague’s mistake in a meeting. If the purpose is only to make yourself look formidable, you may overlook what the other person and the team need. First verify the material, then raise the problem in a way that can actually improve matters; if humiliation has already been caused, acknowledge the effect and make amends — do not close the discussion with “I only meant well”.",
        },
      ],
    },
    action: {
      summary:
        "Before making a decision, write one sentence — “What do I hope this will bring about?” — then check who may be affected.",
      overviewQualifier: "Good intentions are still answerable for method and for consequence.",
      steps: "Identify the purpose; confirm whether the other person needs it, or agrees to it; choose an approach whose consequences you can own. Afterwards ask: “Did the outcome serve what I originally cared about? What needs remedying?”",
      kind: "editorial",
    },
    misunderstandings: {
      kind: "boundary",
      items: [
        {
          question: "If the intention is good, are any means acceptable?",
          answer:
            "This site does not accept that conclusion. The extreme examples in the original book’s chapter on motive carry this risk of misreading; doing no harm, respecting the other person, and answerability for results are editorial boundaries this site states explicitly.",
        },
        {
          question: "Is taking a salary, or seeing to your own needs, selfish?",
          answer:
            "This site does not judge anyone’s practice by income or by basic needs. The entry point the vocation chapter offers is to begin with the work you have now, using your abilities in service.",
        },
        {
          question: "Must one have no self-directed needs at all before acting?",
          answer:
            "What this chapter offers is honest examination and correction; it sets no threshold of perfect motive for entry.",
        },
      ],
    },
    deeper: {
      kind: "plain",
      paragraphs: [
        {
          text: "The author links motive to the Origin, to karma, and to spiritual development — not merely to social skill. Both books value inner intention; yet in 《要開悟讀這本書就夠了》 there is a tension between the absolutist phrasing of the chapter on motive and the vocation chapter’s requirement of “doing no harm”. This site preserves that difference, and does not claim that the author has offered an ethical standard free of contradiction.",
        },
      ],
    },
    sourceIds: ["S07", "S08", "S15"],
    traceability:
      "S07: 《要開悟讀這本書就夠了》, 〈「動機和目的」的重要性〉 (The Importance of “Motive and Purpose”), book pp. 59–69 / PDF 30–35 — the core at 60–62, the work example at 68–69; the editorial risk in the extreme examples at 61 and 66–67. S08: 〈靈性成長的職業選擇〉 (Career Choices for Spiritual Growth), book pp. 262–263 / PDF 132. S15: 《靈性覺醒》, 〈角色〉 (Roles; Qingqi’s Notes on Awakening No. 117), book / PDF p. 256. The importance of motive is a claim from the original books; the meeting scenario, the examination questions, and the consent and remediation steps in this chapter are editorial arrangements.",
  },
  {
    id: "chapter-4",
    order: 4,
    number: "4",
    shortTitle: "Altruistic Action",
    title: "Turn Altruism into Visible Action",
    titleZh: "讓利他成為看得見的行動",
    core: "The author places the raising of one’s morality, contribution, and service at the core of life’s purpose, and asks that they be practiced in everyday conduct.",
    teaching: {
      kind: "plain",
      paragraphs: [
        {
          text: "In 《要開悟讀這本書就夠了》, 〈複習「生命最高的目的」〉 (Reviewing “The Highest Purpose of Life”) sets service and contribution in a very high place: not only accumulating one’s own knowledge or experience, but also bringing benefit to other lives. 《靈性覺醒》 for its part describes the direction of life through service, help, and love. Both books ask that understanding be carried out in deeds, rather than stopping at slogans.",
        },
        {
          text: "《要開悟讀這本書就夠了》 also criticizes treating good deeds as trade: giving in exchange for blessings, merit, or spiritual attainment. This is not to say that all deliberate helping counts for nothing; it is a reminder not to reduce other people to instruments for obtaining returns. Altruism can be put into practice within work and daily life, without first possessing wealth, titles, or a large circle to serve.",
        },
      ],
    },
    dailyLife: {
      kind: "editorial",
      paragraphs: [
        {
          text: "Preparing a clear handover, honestly stating your limits, completing the tasks you agreed to — any of these can make someone else’s life easier. This site locates “being of use” in the other person’s actual needs, and does not treat the size of donations, how busy you are, or how often you are praised as measures of practice.",
        },
      ],
    },
    example: {
      kind: "editorial",
      paragraphs: [
        {
          text: "A new colleague keeps asking about the same procedure, and at first it irritates you. You first find out exactly where they are stuck, then prepare a short step-by-step sheet and invite them to try it once. This needs no public commendation, nor should you take over all of their work; whether the help was of use can be seen in whether they can afterwards manage more on their own.",
        },
      ],
    },
    action: {
      summary:
        "Ask one person near you what they need, then complete one small act of help that is within your ability.",
      overviewQualifier: "No wealth, title, or crowd of beneficiaries is required first.",
      steps: "Confirm the need; state clearly the range of what you can do; after completing it, listen to the response. If the person does not need it, respect the refusal; if you cannot do it, honestly reschedule or withdraw the promise. These are the editors’ ways of putting it into practice.",
      kind: "editorial",
    },
    misunderstandings: {
      kind: "boundary",
      items: [
        {
          question: "Does altruism mean constantly sacrificing yourself?",
          answer:
            "This site does not list exhausting yourself, concealing the limits of your capacity, or giving up basic needs as requirements.",
        },
        {
          question: "Do only volunteering, religious work, or large donations count?",
          answer:
            "The original books repeatedly include one’s occupation and small matters close at hand within practice, setting no threshold of status.",
        },
        {
          question: "After doing good, will others surely be grateful, and will one’s fortunes surely improve?",
          answer:
            "The author holds beliefs about spiritual response; this site lists neither others’ reciprocation nor future outcomes as guarantees.",
        },
      ],
    },
    deeper: {
      kind: "plain",
      paragraphs: [
        {
          text: "In the author’s view, the scope of service can extend to living beings of every kind, and is connected with the Origin and with spiritual ascension; it is not merely a way of making oneself feel good. The original books contain strict language criticizing self-interest. The “work within your capacity, confirm the need, respect refusal” approach of this chapter is an editorial arrangement designed for general readers; it does not impersonate a theory of self-care that the original books have fully set out.",
        },
      ],
    },
    sourceIds: ["S09", "S10", "S08", "S21"],
    traceability:
      "S09: 《要開悟讀這本書就夠了》, 〈複習「生命最高的目的」〉 (Reviewing “The Highest Purpose of Life”), book pp. 100–105 / PDF 51–53, with service and contribution concentrated at 104–105. S10: 〈所有的靈性成長，沒有一絲一毫能夠用交易行為取得〉 (No Spiritual Growth, However Slight, Can Be Obtained Through Trade), book pp. 34–38 / PDF 18–20; the distinction between trade and everyday help at 34–36. S08: 〈靈性成長的職業選擇〉 (Career Choices for Spiritual Growth), book pp. 263–266 / PDF 132–134. S21: 《靈性覺醒》, 〈開悟者的超級意識和信念〉 (The Superconsciousness and Convictions of an Enlightened One; Note 32), book / PDF p. 154. The everyday example and the three-step small action are editorial arrangements.",
  },
  {
    id: "chapter-5",
    order: 5,
    number: "5",
    shortTitle: "Care and Respect",
    title: "Practice Care and Respect in Your Closest Relationships",
    titleZh: "從身邊關係，練習關愛與尊重",
    core: "The author regards family and one’s daily roles as an important field for practicing love, reminding us not to neglect the relationships and responsibilities right in front of us.",
    teaching: {
      kind: "plain",
      paragraphs: [
        {
          text: "In 《靈性覺醒》, 〈生活裡覺醒的第三步〉 (The Third Step of Awakening in Daily Life) reminds readers not to pursue distant status or achievement while leaving family and the roles beside them behind. 〈角色〉 (Roles) places morality, altruism, wholehearted effort, and responsibility within one’s various roles for examination; 〈讓孩子去實現他的未來〉 (Let the Child Realize His Own Future) expresses care through the image of supporting a child on their way.",
        },
        {
          text: "Part Three of 〈神性基因〉 (The Divine Gene) in 《要開悟讀這本書就夠了》 says that care must not stop at eating together or at a verbal reconciliation — it requires inward sincerity — and notes that the other person still has lessons of their own. In plain words: what you can be responsible for is how you treat people and whether you keep your promises; you cannot gather up all of the other person’s responses onto yourself.",
        },
      ],
    },
    dailyLife: {
      kind: "editorial",
      paragraphs: [
        {
          text: "Practice within relationships is usually small, yet it happens over and over: whether you hear a person out; whether you share what you promised to share; whether you treat your own expectations as the other person’s obligations. This site keeps the original books’ regard for family, while opening the examples to friends, housemates, colleagues, and caregiving relationships; marriage or any particular family form is not set as a requirement.",
        },
      ],
    },
    example: {
      kind: "editorial",
      paragraphs: [
        {
          text: "The field of study your child chooses differs from what you had hoped. You first listen to what they wish to learn and what difficulties they are preparing to face, then explain the support you can offer and its real limits. Care does not need to end with “it is love only if it follows my arrangement”. This example echoes the original books’ support for a child walking their own path, but the specific dialogue is drafted by the editors.",
        },
      ],
    },
    action: {
      summary:
        "Find one relationship that is safe and open to interaction; ask clearly about one need, and follow through on one small commitment.",
      overviewQualifier:
        "Care does not require you to endure harm, nor can it guarantee that the other person responds as you hope.",
      steps: "Listen for the other person’s answer without rushing to answer for them; state what you yourself can do; agree on a time by which it can be done. If the other person does not wish to talk, respect that first; where a relationship is causing harm, reconciliation or contact with that person is not the assignment of this chapter.",
      kind: "editorial",
    },
    misunderstandings: {
      kind: "boundary",
      items: [
        {
          question: "Does loving your family mean accepting every kind of treatment?",
          answer:
            "That is not this site’s requirement for practice. Care does not mean accepting abuse, abandoning boundaries, or giving up on seeking help.",
        },
        {
          question: "If the other person does not change, does it mean I was not sincere enough?",
          answer:
            "The original books also distinguish your own lessons from the other person’s; this site does not promise that giving will always be answered.",
        },
        {
          question: "Without a spouse, children, or close family, is practice impossible?",
          answer:
            "The original books contain passages that stress the traditional family, but 〈角色〉 (Roles) also speaks of classmates, friends, and colleagues. This site does not measure anyone’s qualification to practice by family status.",
        },
      ],
    },
    deeper: {
      kind: "plain",
      paragraphs: [
        {
          text: "The author understands family relationships through karmic bonds, through life’s arrangements, and through the realization of love; this is the original books’ spiritual explanation. Readers can understand this background without having to explain every relationship difficulty as a responsibility from a past life. Safety, consent, and respect for refusal are editorial boundaries of this site; no claim is made that they are a theory the original books have systematically set out.",
        },
      ],
    },
    sourceIds: ["S11", "S12", "S13", "S14", "S15", "S03"],
    traceability:
      "S11: 《靈性覺醒》, 〈生活裡覺醒的第三步〉 (The Third Step of Awakening in Daily Life; Note 27), book / PDF pp. 133–137. S12: 〈讓孩子去實現他的未來〉 (Let the Child Realize His Own Future; Note 51), p. 179. S13: 〈帶著內在胸懷的愛給家人祝福〉 (Blessing Family with Love from Within; Note 52), p. 180. S14: 〈夫妻關係和婚姻〉 (Couple Relationships and Marriage; Note 59), p. 188. S15: 〈角色〉 (Roles), p. 256. S03: 《要開悟讀這本書就夠了》, 〈神性基因（下）〉 (The Divine Gene, Part 3), book pp. 186–187 / PDF 94. Roles and care are claims from the original books; the varied everyday scenarios, the questioning steps, and the safety boundaries are editorial arrangements.",
  },
  {
    id: "chapter-6",
    order: 6,
    number: "6",
    shortTitle: "Adjust Your Response",
    title: "When Things Go Wrong, Adjust Your Own Response",
    titleZh: "面對不順，調整自己的回應",
    core: "Both books regard difficulty as a field of learning, and stress examining how you respond to the people and matters before you.",
    teaching: {
      kind: "plain",
      paragraphs: [
        {
          text: "In 《靈性覺醒》, 〈眼前所困，即其所解〉 (The Difficulty Before You Is Also Its Solution) places hardship within the author’s view of a life blueprint: in his account, what is hard to pass through right now is a lesson chosen before birth, one that needs to be experienced and brought into balance. That is the author’s spiritual explanation. 《要開悟讀這本書就夠了》 uses the story of a small matter that sets off a chain of conflict, reminding readers to notice their own handling of things; 〈中庸與情緒涵養〉 (The Middle Way and Emotional Cultivation) discusses understanding how things came about, patience, and the proper measure in expressing emotion.",
        },
        {
          text: "What this site draws together as practicable is this: acknowledge that the matter has happened, acknowledge your own feelings as well, then identify what you can still do. This is not to say that difficulties are all of one’s own making, or that the right attitude guarantees a solution.",
          kind: "boundary",
        },
      ],
    },
    dailyLife: {
      kind: "editorial",
      paragraphs: [
        {
          text: "We may not be able to determine other people’s arrangements, resources, or sudden events, but we can examine our own next words, whether the facts have been checked, and whether someone’s help is needed. Adjusting your response and pressing for fair handling can proceed at the same time.",
        },
      ],
    },
    example: {
      kind: "editorial",
      paragraphs: [
        {
          text: "A proposal you spent a long time preparing is sent back. You feel defeated and want to blame your partner. You first admit your disappointment, confirm why it was returned, then agree on the parts that can be revised. If unreasonable demands are involved, state your limits clearly and seek coordination; there is no need to first persuade yourself that “all of this is just fine”.",
        },
      ],
    },
    action: {
      summary:
        "Pick one difficulty and write down: “what has happened, what I feel, one step I can take now”.",
      overviewQualifier:
        "Acknowledging pain and taking action can proceed together; this does not mean every difficulty is of one’s own making.",
      steps: "Choose only one matter, the one at hand; state the feeling clearly, without grading its worth; choose one concrete action — asking, correcting, stating a boundary, or seeking help. Tomorrow, look back at whether it was done and at what needs adjusting. This is not a fixed writing technique from the original books.",
      kind: "editorial",
    },
    misunderstandings: {
      kind: "boundary",
      items: [
        {
          question: "Does being positive mean you cannot feel sorrow or anger?",
          answer:
            "The chapter on emotion in 《要開悟讀這本書就夠了》 allows appropriate expression; 《靈性覺醒》 also writes that pain may be spoken aloud. This website requires no suppression, and still less does it grade anyone’s practice by their emotions.",
        },
        {
          question: "If you accept what has happened, can you no longer protest or seek help?",
          answer:
            "This site distinguishes acknowledging the situation from approving of harm; you may protect yourself, address the problem, and press for fair treatment.",
        },
        {
          question: "Is ninety percent of life within one’s own control?",
          answer:
            "The relevant chapters of 《要開悟讀這本書就夠了》 contain a statement in the form of a ratio; this site does not treat that ratio, or the related psychological attribution, as verified fact, nor as a formula for blaming people.",
        },
      ],
    },
    deeper: {
      kind: "plain",
      paragraphs: [
        {
          text: "The author is not speaking of pure coping technique, but of the soul’s experience, the balancing of karma, and the growth of life. Readers can first understand this belief and then decide what to make of it; making one responsible response does not require accepting that “suffering was arranged by oneself before birth” as its premise.",
        },
        {
          text: "The original books make demands of emotion with differing intensity: some passages stress complete positivity, while 〈中庸與情緒涵養〉 (The Middle Way and Emotional Cultivation) holds that expression must be fitting. This site takes the editorial direction of “recognize the feeling, examine the behavior, correct when needed”, and openly preserves the difference among the sources.",
        },
      ],
    },
    sourceIds: ["S18", "S19", "S16", "S17"],
    traceability:
      "S18: 《靈性覺醒》, 〈眼前所困，即其所解〉 (The Difficulty Before You Is Also Its Solution; Note 31), book / PDF pp. 150–153. S19: 〈生活裡覺醒的第二步〉 (The Second Step of Awakening in Daily Life; Note 20), pp. 117–120, with the acknowledgment of pain at 117. S16: 《要開悟讀這本書就夠了》, 〈費斯汀格法則與靈性成長的陷阱〉 (The Festinger Rule and the Traps of Spiritual Growth), book pp. 238–244 / PDF 120–123, the reaction story chiefly at 238–240. S17: 〈中庸與情緒涵養〉 (The Middle Way and Emotional Cultivation), book pp. 496–502 / PDF 249–252 — fitting expression at 497–499, understanding how things came about at 502. The feeling-writing exercise, the help-seeking options, and the proposal example are editorial arrangements.",
  },
];

export function getChapter(id: string): Chapter | undefined {
  return CHAPTERS.find((c) => c.id === id);
}
