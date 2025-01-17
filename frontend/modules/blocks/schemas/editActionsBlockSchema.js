import buildLanguageSchema from '~/core/app/helpers/buildLanguageSchema';
import '~/modules/slides/containers/slideRefSelectorContainer.formField';

const text = buildLanguageSchema('text', {
  type: 'Text',
  label: 'Text'
})

export default {
  actions: {
    type: 'Array',
    label: 'Actions',
    subSchema: {
      ...text,
      slideRef: {
        type: 'SlideRefSelector',
        label: 'Navigate to'
      },
      context: {
        type: 'TextArea',
        label: 'AI - Choose this if:',
        help: 'Context for AI driven navigation.'
      }
    }
  }
}