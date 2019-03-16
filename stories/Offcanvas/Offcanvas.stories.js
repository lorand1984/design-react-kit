import React from "react";
import { storiesOf } from "@storybook/react";
import { Viewport } from "@storybook/addon-viewport";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";
import { withDocs } from "../utils";

import { Navbar, NavbarToggler, Offcanvas } from "../../src";

import OffcanvasExample from "./OffcanvasExample";

import Esempi from "./Esempi.md";

storiesOf("Componenti/Offcanvas", module)
    .addDecorator(withA11y)
    .add(
        "Esempio",
        withDocs(
            Esempi,
            withInfo({
                propTables: [Navbar, NavbarToggler, Offcanvas],
                propTablesExclude: [Viewport, OffcanvasExample]
            })(() => <OffcanvasExample/>)
        )
    );
