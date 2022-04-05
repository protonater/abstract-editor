import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled';
import { EditorPanel } from "./Editor/editor-panel";
import { convertFromRaw, EditorState } from "draft-js";

type Props = {}

/**
 * Main Layout: (Grid)
 *
 * --------------------------------------
 * Editor Menu     |   |   Preview Menu
 * ----------------|   | ----------------
 *      gutter       g         gutter
 * ----------------| u | ----------------
 *                 | t |
 *                 | t |
 * Editor Panel    | e | Prism Container
 *                 | r |
 *                 |   |
 * ----------------|   |------------------
 */
const MainLayout = styled.div`
 padding-top: "30px";
 position: absolute;
 inset: 48px 20px;
 display: grid;
 grid-gap: 1rem;
 grid-template-columns: repeat(2, [col] calc(50% - 10px));
 grid-template-rows: 30px auto;
`;

const emptyContentState = convertFromRaw({
  entityMap: {},
  blocks: [
    {
      text: "",
      key: "foo",
      type: "unstyled",
      entityRanges: [],
      inlineStyleRanges: [],
      depth: 0,
    },
  ],
});

const Container = (props: Props) => {
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(emptyContentState)
  );
  useEffect(() => {
    const history = localStorage.getItem("rawContent");
    const rawContent = JSON.parse(history);
    if (history) {
      setEditorState(EditorState.createWithContent(convertFromRaw(rawContent)));
    }
  }, []);
  const contentState = editorState.getCurrentContent();
  return (
    <MainLayout>
      <EditorPanel editorState={editorState}
          setEditorState={setEditorState} />
    </MainLayout>
  )
}

export default Container