import React from "react"
import Picture from "./IMG_8944.jpg"
import { MdFormatQuote } from "react-icons/md"

function About() {
	return (
		<div className="aboutContainer">
			<div className="aboutHeader">
				<img src={Picture} alt="mypic"></img>
			</div>

			<div class="text-wrap-about">
				<p>
					<span>N</span>adat het bedrijf waar ik
					jarenlang werkte als grafisch ontwerper
					failliet ging, heb ik besloten om het
					roer om te draaien. Ik ben toen een
					beroepskeuze traject in gegaan en na
					grondig onderzoek in mijn persoonlijke
					interesses en ambities is hier
					Front-end/ Full-stack Development
					uitgekomen. Deze uitkomst was voor mij
					niet geheel verrassend. Twee vrienden
					van mij zijn beiden al jaren werkzaam
					als programmeur. Zij hadden mijn
					interesse al eerder gewekt, na vele
					mooie verhalen over technieken, code en
					het werken aan projecten in deze sector.
				</p>
				<p>
					Ik ben toen op zoek gegaan naar de
					juiste opleiding, waarbij ik van deze
					interesse mijn werk zou kunnen maken. Er
					worden op dit gebied zoveel
					verschillende opleidingen aangeboden,
					van online tot op locatie. Na aardig wat
					research bleek dat de opleiding
					Full-stack Development bij Winc Academy
					het beste bij mij zou passen. Om hier
					zeker van te zijn heb ik eerst de
					opleiding Web Development voor Beginners
					gevolgd. Ik was zo enthousiast over deze
					opleiding, dat dit voor mij de doorslag
					slag gaf. Ik wist het zeker, ik word
					developer!
				</p>

				<blockquote>
					<MdFormatQuote />
					Het fijne aan de opleiding vind ik dat
					je zelf verantwoordelijk bent voor je
					leerproces. Je kan je tempo helemaal
					zelf bepalen. <MdFormatQuote />
				</blockquote>
				<p>
					<span>S</span>oms komt het voor dat ik
					even niet meer weet hoe ik verder moet
					met een opdracht, je loopt vast en komt
					er gewoon echt niet meer uit. De
					docenten zijn enorm bereidwillig om te
					helpen met het probleem, alleen geven ze
					nooit één antwoord wat je hele probleem
					oplost. Ze veranderen door kleine hints
					en tips jouw gedachtegang en hierdoor
					bekijk je het probleem ineens van een
					heel ander perspectief, waardoor je jouw
					probleem toch zelf oplost. De leukste
					opdrachten vind ik toch echt de grotere
					opdrachten/eindopdrachten. Dit omdat
					hier verschillende talen en technieken
					samenkomen wat voor veel uitdaging
					zorgt.{" "}
				</p>
				<p>
					Zeven dagen per week investeer ik tijd
					aan de opleiding. De tijd naast mijn
					studie besteed ik aan hobby’s zoals
					fotografie, koken, Netflix, lezen,
					golfen, spelletjes of andere vormen van
					ontspanning zoals sporten. Op dit moment
					heb ik 70% van de opleiding Front-end
					Development voltooid. Mijn uiteindelijke
					doel is omdat deze opleiding succesvol
					af te ronden en daarna te starten met de
					opleiding Back-end Development.{" "}
				</p>
				<blockquote>
					<MdFormatQuote />
					Mijn doel voor 2021 is het vinden van
					een leuke werkgever, waar ik mijn junior
					developer skills in de praktijk kan gaan
					inzetten en verder kan uitbouwen.
					<MdFormatQuote />
				</blockquote>
			</div>
		</div>
	)
}

export default About
