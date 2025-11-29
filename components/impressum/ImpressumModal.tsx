"use client";

import { IoClose as Close } from "react-icons/io5";

export default function ImpressumModal({ onClose }: { onClose: () => void }) {
  return (
    <>
      <div
        className="fixed inset-0 bg-background/32 backdrop-blur-sm z-90 cursor-pointer"
        onClick={onClose}
      />
      <div className="fixed inset-4 sm:inset-1/8 bg-background text-foreground p-8 rounded-xs shadow-2xl overflow-y-auto z-100 ">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 "
          aria-label="Modal schließen"
        >
          <Close className="w-8 h-8 cursor-pointer" />
        </button>
        <h2 className="text-3xl font-bold mb-4 font-funnel">Impressum</h2>

        <div className="space-y-6 leading-relaxed max-w-3xl font-funnel">
          <div>
            <strong>Anbieter:</strong>
            <br />
            Laurin Schmidt
            <br />
            Moltkestraße 92
            <br />
            40479 Düsseldorf
            <br />
            Deutschland
          </div>

          <div>
            <strong>Kontakt:</strong>
            <br />
            E-Mail: laurin.schmidt@example.com
            <br />
            Website: www.laurin-schmidt.dev
          </div>

          <div>
            <strong>
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
            </strong>
            <br />
            Laurin Schmidt
            <br />
            Moltkestraße 92
            <br />
            40479 Düsseldorf
          </div>

          <div>
            <strong>Hinweise:</strong>
            <br />
            Keine Umsatzsteuerpflicht gemäß § 19 UStG.
            <br />
            Es werden keine kostenpflichtigen Leistungen angeboten.
            <br />
            Diese Website ist eine private, nicht-kommerzielle Landing-Page.
            <br />
          </div>

          <h3 className="text-2xl font-semibold mt-10">Datenschutzerklärung</h3>

          <div>
            <strong>Allgemeiner Hinweis</strong>
            <br />
            Es werden keinerlei personenbezogene Daten aktiv erhoben oder
            gespeichert. Es findet kein Tracking statt. Es werden keine Cookies
            gesetzt.
          </div>

          <div>
            <strong>Verwendung externer Links</strong>
            <br />
            Diese Website enthält ausschließlich einfache Links zu externen
            Plattformen wie GitHub und LinkedIn. Beim Klick verlassen Sie diese
            Website und wechseln zu dem jeweiligen Dienstanbieter. Für die dort
            erhobenen Daten ist ausschließlich der Drittanbieter verantwortlich.
          </div>

          <div>
            <strong>Server-Logs</strong>
            <br />
            Beim Aufruf dieser Website speichert der Web-Hoster technisch
            notwendige Daten (z.&nbsp;B. IP-Adresse, Zugriffszeit) in
            sogenannten Server-Logs. Diese dienen der Sicherstellung des
            Betriebs und werden automatisch gelöscht.
          </div>

          <div>
            <strong>Rechte der Nutzer</strong>
            <br />
            Sie haben jederzeit das Recht, Auskunft über gespeicherte Daten zu
            verlangen sowie deren Löschung zu fordern. Da hier keine aktiv
            erhobenen personenbezogenen Daten gespeichert werden, besteht im
            Normalfall kein Handlungsbedarf.
          </div>
        </div>
      </div>
    </>
  );
}
