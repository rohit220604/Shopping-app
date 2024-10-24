import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (69)</div>          
        </div>
        <div className="descriptionbox-description">
            <p>
            In the first sample essay from mechanical engineering, what stands out immediately are the length and the photographs. In this case, the student was applying for an engineering scholarship, so he was given room to flesh out technical material as well as address issues such as personal motivations one would expect to read in a personal statement. Much of the essay is given to a discussion of his thesis work, which involves the examination of “the propagation of a flame in a small glass tube.” The figures depict the experimental work and represent the success of preliminary thesis results, visually indicating the likely point at which the flame reached detonation.
            </p>
            <p>
            The three-page personal statement by the liberal arts student is interesting in that it is often intentionally abstract and a bit philosophical. This student attended a small liberal arts school that promotes a “Think, Evolve, Act” theme to its students, and this student reflects on this theme and embraces it in his own life from the beginning of the essay. In his curriculum, he has taken a course on Gandhi and Nonviolence, studied abroad in Belgium, and self-designed a program of “Peace and Conflict Studies with an emphasis in Technological Revolution.” He has also taken a ten-day service learning trip to Costa Rica, studied at the Institute of Gandhian Studies in India, served part-time as an assistant to a member of the European Parliament, and written a paper entitled “A Knowledge-Based Society and the Digital Divide.” Meanwhile, he plans to graduate with distinction in both of his majors. In jazz terms, this student certainly does seem to have the chops.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox