export default function ImpressumPage() {
  return (
    <section className="min-h-screen w-full flex flex-col justify-start items-start p-8 font-funnel text-foreground">
      <h1 className="text-3xl sm:text-5xl font-bold mb-6">Impressum</h1>

      <div className="space-y-6 leading-relaxed max-w-3xl">
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
          <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong>
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

        <h2 className="text-2xl font-semibold mt-10">Datenschutzerklärung</h2>

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
          notwendige Daten (z.&nbsp;B. IP-Adresse, Zugriffszeit) in sogenannten
          Server-Logs. Diese dienen der Sicherstellung des Betriebs und werden
          automatisch gelöscht.
        </div>

        <div>
          <strong>Rechte der Nutzer</strong>
          <br />
          Sie haben jederzeit das Recht, Auskunft über gespeicherte Daten zu
          verlangen sowie deren Löschung zu fordern. Da hier keine
          aktiverhobenen personenbezogenen Daten gespeichert werden, besteht im
          Normalfall kein Handlungsbedarf.
        </div>

        <p className="text-sm text-muted-foreground mt-8">
          Stand: {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}
