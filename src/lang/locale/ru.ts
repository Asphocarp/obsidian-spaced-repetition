// русский

// English

export default {
    // flashcard-modal.tsx
    DECKS: "Доски",
    DUE_CARDS: "Предстоящие карточки",
    NEW_CARDS: "Новые карточки",
    TOTAL_CARDS: "Всего карточек",
    EDIT_LATER: "Редактировать после",
    RESET_CARD_PROGRESS: "Сбросить прогресс карточки",
    HARD: "Сложно",
    GOOD: "Нормально",
    EASY: "Легко",
    SHOW_ANSWER: "Показать ответ",
    CARD_PROGRESS_RESET: "Прогресс изучение карточки был сброшен",

    // main.ts
    OPEN_NOTE_FOR_REVIEW: "Открыть заметку для повторения",
    REVIEW_CARDS: "Повторить карточки",
    REVIEW_EASY_FILE_MENU: "Повторение: Легко",
    REVIEW_GOOD_FILE_MENU: "Повторение: Нормально",
    REVIEW_HARD_FILE_MENU: "Повторение: Сложно",
    REVIEW_NOTE_EASY_CMD: "Повторять заметку как Лёгкую",
    REVIEW_NOTE_GOOD_CMD: "Повторять заметку как Нормальную",
    REVIEW_NOTE_HARD_CMD: "Повторять заметку как Сложную",
    REVIEW_CARDS_IN_NOTE: "Повторить карточки в этой заметке",
    CRAM_CARDS_IN_NOTE: "Зубрить карточки в этой заметке",
    REVIEW_ALL_CARDS: "Повторить все карточки во всех заметках",
    VIEW_STATS: "Посмотреть статистику",
    STATUS_BAR: "Повторить: ${dueNotesCount} заметок(-ки), ${dueFlashcardsCount} карточек(-ки) предстоит",
    SYNC_TIME_TAKEN: "Синхронизация заняла ${t}мс",
    NOTE_IN_IGNORED_FOLDER: "Заметка сохранена в игнорируемую папку (см настройки).",
    PLEASE_TAG_NOTE: "Пожалуйста пометьте заметку как надо для повторения (см настройки).",
    RESPONSE_RECEIVED: "Ответ получен.",
    NO_DECK_EXISTS: "Не существует доски ${deckName}",
    ALL_CAUGHT_UP: "Есть! Ты справился! :D.",

    // scheduling.ts
    DAYS_STR_IVL: "${interval} дней",
    MONTHS_STR_IVL: "${interval} месяцов",
    YEARS_STR_IVL: "${interval} года(лет)",
    DAYS_STR_IVL_MOBILE: "${interval}д",
    MONTHS_STR_IVL_MOBILE: "${interval}м",
    YEARS_STR_IVL_MOBILE: "${interval}г",

    // settings.ts
    SETTINGS_HEADER: "Spaced Repetition Плагин - Настройки",
    CHECK_WIKI: 'Для дополнительной инфы, смотри <a href="${wiki_url}">wiki</a>. Скоро будет перевод :3',
    FOLDERS_TO_IGNORE: "Игнорируемы папки",
    FOLDERS_TO_IGNORE_DESC: "Enter folder paths separated by newlines i.e. Templates Meta/Scripts",
    FLASHCARDS: "Флэшкарточки",
    FLASHCARD_TAGS: "Тэги флэшкарточек",
    FLASHCARD_TAGS_DESC:
        "Enter tags separated by spaces or newlines i.e. #flashcards #deck2 #deck3.",
    CONVERT_FOLDERS_TO_DECKS: "Convert folders to decks and subdecks?",
    CONVERT_FOLDERS_TO_DECKS_DESC: "This is an alternative to the Flashcard tags option above.",
    INLINE_SCHEDULING_COMMENTS:
        "Save scheduling comment on the same line as the flashcard's last line?",
    INLINE_SCHEDULING_COMMENTS_DESC:
        "Turning this on will make the HTML comments not break list formatting.",
    BURY_SIBLINGS_TILL_NEXT_DAY: "Bury sibling cards until the next day?",
    BURY_SIBLINGS_TILL_NEXT_DAY_DESC:
        "Siblings are cards generated from the same card text i.e. cloze deletions",
    SHOW_CARD_CONTEXT: "Show context in cards?",
    SHOW_CARD_CONTEXT_DESC: "i.e. Title > Heading 1 > Subheading > ... > Subheading",
    CARD_MODAL_HEIGHT_PERCENT: "Flashcard Height Percentage",
    CARD_MODAL_SIZE_PERCENT_DESC:
        "Should be set to 100% on mobile or if you have very large images",
    RESET_DEFAULT: "Reset to default",
    CARD_MODAL_WIDTH_PERCENT: "Flashcard Width Percentage",
    FILENAME_OR_OPEN_FILE: "Show file name instead of 'Edit Later' in flashcard review?",
    RANDOMIZE_CARD_ORDER: "Randomize card order during review?",
    DISABLE_CLOZE_CARDS: "Disable cloze cards?",
    CONVERT_HIGHLIGHTS_TO_CLOZES: "Convert ==hightlights== to clozes?",
    CONVERT_BOLD_TEXT_TO_CLOZES: "Convert **bolded text** to clozes?",
    INLINE_CARDS_SEPARATOR: "Separator for inline flashcards",
    FIX_SEPARATORS_MANUALLY_WARNING:
        "Note that after changing this you have to manually edit any flashcards you already have.",
    INLINE_REVERSED_CARDS_SEPARATOR: "Separator for inline reversed flashcards",
    MULTILINE_CARDS_SEPARATOR: "Separator for multiline flashcards",
    MULTILINE_REVERSED_CARDS_SEPARATOR: "Separator for multiline reversed flashcards",
    NOTES: "Notes",
    TAGS_TO_REVIEW: "Tags to review",
    TAGS_TO_REVIEW_DESC: "Enter tags separated by spaces or newlines i.e. #review #tag2 #tag3.",
    OPEN_RANDOM_NOTE: "Open a random note for review",
    OPEN_RANDOM_NOTE_DESC: "When you turn this off, notes are ordered by importance (PageRank).",
    AUTO_NEXT_NOTE: "Open next note automatically after a review",
    DISABLE_FILE_MENU_REVIEW_OPTIONS:
        "Disable review options in the file menu i.e. Review: Easy Good Hard",
    DISABLE_FILE_MENU_REVIEW_OPTIONS_DESC:
        "After disabling, you can review using the command hotkeys. Reload Obsidian after changing this.",
    MAX_N_DAYS_REVIEW_QUEUE: "Maximum number of days to display on right panel",
    MIN_ONE_DAY: "The number of days must be at least 1.",
    VALID_NUMBER_WARNING: "Please provide a valid number.",
    ALGORITHM: "Algorithm",
    CHECK_ALGORITHM_WIKI:
        'For more information, check the <a href="${algo_url}">algorithm implementation</a>.',
    BASE_EASE: "Base ease",
    BASE_EASE_DESC: "minimum = 130, preferrably approximately 250.",
    BASE_EASE_MIN_WARNING: "The base ease must be at least 130.",
    LAPSE_INTERVAL_CHANGE: "Interval change when you review a flashcard/note as hard",
    LAPSE_INTERVAL_CHANGE_DESC: "newInterval = oldInterval * intervalChange / 100.",
    EASY_BONUS: "Easy Bonus",
    EASY_BONUS_DESC:
        "The easy bonus allows you to set the difference in intervals between answering Good and Easy on a flashcard/note (minimum = 100%).",
    EASY_BONUS_MIN_WARNING: "The easy bonus must be at least 100.",
    MAX_INTERVAL: "Maximum Interval",
    MAX_INTERVAL_DESC: "Allows you to place an upper limit on the interval (default = 100 years).",
    MAX_INTERVAL_MIN_WARNING: "The maximum interval must be at least 1 day.",
    MAX_LINK_CONTRIB: "Maximum link contribution",
    MAX_LINK_CONTRIB_DESC:
        "Maximum contribution of the weighted ease of linked notes to the initial ease.",
    LOGGING: "Logging",
    DISPLAY_DEBUG_INFO: "Display debugging information on the developer console?",

    // sidebar.ts
    NOTES_REVIEW_QUEUE: "Notes Review Queue",
    CLOSE: "Close",
    NEW: "New",
    YESTERDAY: "Yesterday",
    TODAY: "Today",
    TOMORROW: "Tomorrow",

    // stats-modal.tsx
    STATS_TITLE: "Статистика",
    MONTH: "Месяц",
    QUARTER: "Четверть",
    YEAR: "год",
    LIFETIME: "Lifetime",
    FORECAST: "Прогноз",
    FORECAST_DESC: "The number of cards due in the future",
    SCHEDULED: "Scheduled",
    DAYS: "Days",
    NUMBER_OF_CARDS: "Number of cards",
    REVIEWS_PER_DAY: "Среднее количство: ${avg} reviews/день",  //!!!
    INTERVALS: "Интервалы",
    INTERVALS_DESC: "Delays until reviews are shown again",
    COUNT: "Count",
    INTERVALS_SUMMARY: "Average interval: ${avg}, Longest interval: ${longest}",
    EASES: "Eases",
    EASES_SUMMARY: "Average ease: ${avgEase}",
    CARD_TYPES: "Типы карточек",
    CARD_TYPES_DESC: "This includes buried cards as well, if any",
    CARD_TYPE_NEW: "Новая",
    CARD_TYPE_YOUNG: "Молодая",
    CARD_TYPE_MATURE: "Бывалая",
    CARD_TYPES_SUMMARY: "Всего карточек: ${totalCardsCount}",
};
