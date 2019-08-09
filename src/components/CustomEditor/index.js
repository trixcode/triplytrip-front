/* eslint-disable import/prefer-default-export */
import React from 'react';
import {
  Editor, EditorState, RichUtils, getDefaultKeyBinding, convertFromHTML, convertToRaw,
} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import './style.scss';

export class richEditor extends React.Component {
  constructor(props) {
    super(props);
    const { input } = this.props;
    this.input = input;
    this.state = { editorState: EditorState.createEmpty() };
    if (props.input.value) {
      this.state.editorState = EditorState.createWithContent(convertFromHTML(props.input.value));
    }
    this.focus = () => this.editor.focus();
    this.onChange = (editorState) => {
      this.setState({ editorState });
      this.input.onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    };

    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.mapKeyToEditorCommand = this.mapKeyToEditorCommand.bind(this);
    this.toggleBlockType = this.toggleBlockType.bind(this);
    this.toggleInlineStyle = this.toggleInlineStyle.bind(this);
  }

  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }


  mapKeyToEditorCommand(e) {
    const { editorState } = this.state;
    switch (e.keyCode) {
      case 9: { // TAB
        const newEditorState = RichUtils.onTab(
          e,
          editorState,
          4, /* maxDepth */
        );
        if (newEditorState !== editorState) {
          this.onChange(newEditorState);
        }
        return;
      }
      default:
        break;
    }
    // eslint-disable-next-line consistent-return
    return getDefaultKeyBinding(e);
  }

  toggleBlockType(blockType) {
    const { editorState } = this.state;
    this.onChange(
      RichUtils.toggleBlockType(
        editorState,
        blockType,
      ),
    );
  }

  toggleInlineStyle(inlineStyle) {
    const { editorState } = this.state;
    this.onChange(
      RichUtils.toggleInlineStyle(
        editorState,
        inlineStyle,
      ),
    );
  }

  render() {
    const { editorState } = this.state;

    let className = 'RichEditor-editor';
    const contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += ' RichEditor-hidePlaceholder';
      }
    }

    return (
      <div className="RichEditor-root">
        <BlockStyleControls
          editorState={editorState}
          onToggle={this.toggleBlockType}
        />
        <InlineStyleControls
          editorState={editorState}
          onToggle={this.toggleInlineStyle}
        />
        <div role="presentation" className={className} onClick={this.focus}>
          <Editor
            {...this.input}
            blockStyleFn={this.getBlockStyle}
            customStyleMap={this.styleMap}
            editorState={editorState}
            handleKeyCommand={this.handleKeyCommand}
            keyBindingFn={this.mapKeyToEditorCommand}
            onChange={this.onChange}
            ref={(ref) => { this.editor = ref; }}
            spellCheck
          />
        </div>
      </div>
    );
  }
}

// Custom overrides for "code" style.
// const styleMap = {
//   CODE: {
//     backgroundColor: 'rgba(0, 0, 0, 0.05)',
//     fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
//     fontSize: 16,
//     padding: 2,
//   },
// };

// function getBlockStyle(block) {
//   switch (block.getType()) {
//     case 'blockquote': return 'RichEditor-blockquote';
//     default: return null;
//   }
// }

class StyleButton extends React.Component {
  constructor() {
    super();
    this.onToggle = (e) => {
      e.preventDefault();
      // eslint-disable-next-line react/destructuring-assignment
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    const { active, label } = this.props;
    let className = 'RichEditor-styleButton';
    if (active) {
      className += ' RichEditor-activeButton';
    }

    return (
      <span role="presentation" className={className} onMouseDown={this.onToggle}>
        {label}
      </span>
    );
  }
}

const BLOCK_TYPES = [
  { label: 'H1', style: 'header-one' },
  { label: 'H2', style: 'header-two' },
  { label: 'H3', style: 'header-three' },
  { label: 'H4', style: 'header-four' },
  { label: 'H5', style: 'header-five' },
  { label: 'H6', style: 'header-six' },
  { label: 'Blockquote', style: 'blockquote' },
  { label: 'UL', style: 'unordered-list-item' },
  { label: 'OL', style: 'ordered-list-item' },
  { label: 'Code Block', style: 'code-block' },
];

const BlockStyleControls = (props) => {
  const { editorState } = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <div className="RichEditor-controls">
      {BLOCK_TYPES.map(type => (
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
};

const INLINE_STYLES = [
  { label: 'Bold', style: 'BOLD' },
  { label: 'Italic', style: 'ITALIC' },
  { label: 'Underline', style: 'UNDERLINE' },
  { label: 'Monospace', style: 'CODE' },
];

const InlineStyleControls = (props) => {
  const { editorState } = props;
  const currentStyle = editorState.getCurrentInlineStyle();
  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map(type => (
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
};
