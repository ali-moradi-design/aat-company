import Image from "next/image";
import { Reveal } from "@/features/reveal/ui/Reveal";
import { members } from "@/entities/team/model/team";

/**
 * "About" teaser: a grey heading on the left, two team members with portraits in
 * the middle, and their biographies underneath.
 */
export function TeamBlock() {
  return (
    <section className="row block-team mb-g" aria-labelledby="team-heading">
      <Reveal as="h2" id="team-heading" className="block-team__heading">
        About
      </Reveal>

      <div className="block-team__members">
        {members.map((member, index) => (
          <Reveal
            key={member.name}
            delay={index * 0.08}
            className="block-team__member"
          >
            <figure className="block-team__media relative m-0 w-full overflow-hidden">
              <div
                className="aspect-ratio-box"
                style={{ ["--ratio" as string]: "1.3331" }}
              >
                <Image
                  src={member.image}
                  alt={member.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 100vw"
                  className="object-cover"
                />
              </div>
            </figure>

            <div className="block-team__meta">
              <p className="block-team__name m-0">{member.name}</p>
              <p className="block-team__role m-0">{member.role}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="block-team__texts">
        {members.map((member, index) => (
          <Reveal key={`${member.name}-bio`} delay={index * 0.08}>
            <p className="block-team__text m-0">{member.bio}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
