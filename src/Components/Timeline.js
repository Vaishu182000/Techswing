import React from "react";
import { MDBTimeline, MDBTimelineStep, MDBIcon } from "mdbreact";

const Timeline = () => {
  return (
    <MDBTimeline>
      <MDBTimelineStep colorful icon="check" color="red darken-2">
        <h4 className="font-weight-bold red darken-2 white-text p-3">
          Ut enim ad minim veniam
        </h4>
        <p className="text-muted mt-3 px-4">
          <MDBIcon icon="clock" aria-hidden="true" /> 11 hours ago
          via Twitter
        </p>
        <p className="mb-0 px-4 pb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </MDBTimelineStep>
      <MDBTimelineStep colorful inverted color="red darken-2" icon="credit-card">
        <h4 className="font-weight-bold red darken-2 white-text p-3">
          Ut enim ad minim veniam
        </h4>
        <p className="text-muted mt-4 px-4">
          <MDBIcon icon="clock" aria-hidden="true" /> 11 hours ago
          via Twitter
        </p>
        <p className="mb-0 px-4 pb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </MDBTimelineStep>
      <MDBTimelineStep colorful icon="credit-card" color="red darken-2">
        <h4 className="font-weight-bold  red darken-2 white-text p-3 mb-0">
          Duis aute irure dolor
        </h4>
        <p className="mb-0 p-4">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae
          vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
          voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem sequi
          nesciunt.
        </p>
      </MDBTimelineStep>
      <MDBTimelineStep colorful inverted icon="save" color="red darken-2">
        <h4 className="font-weight-bold red darken-2 white-text p-3">
          Ut enim ad minim veniam
        </h4>
        <p className="text-muted mt-4 px-4">
          <MDBIcon icon="clock" aria-hidden="true" /> 11 hours ago
          via Twitter
        </p>
        <p className="mb-0 px-4 pb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </MDBTimelineStep>
      <MDBTimelineStep colorful icon="thumbs-up" color="red darken-2">
        <h4 className="font-weight-bold red darken-2 white-text p-3 mb-0">
          Mussum ipsum cacilds
        </h4>
        <p className="mb-0 p-4">
          Nam libero tempore, cum soluta nobis est eligendi optio cumque
          nihil impedit quo minus id quod maxime placeat facere possimus,
          omnis voluptas assumenda est, omnis dolor repellendus.
          Temporibus autem quibusdam et aut officiis debitis aut rerum
          necessitatibus saepe eveniet ut et voluptates repudiandae sint
          et molestiae non recusandae. Itaque earum rerum hic tenetur a
          sapiente delectus, ut aut reiciendis voluptatibus maiores alias
          consequatur aut perferendis doloribus asperiores repellat.
        </p>
      </MDBTimelineStep>
    </MDBTimeline>
  );
};

export default Timeline;